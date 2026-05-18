// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

console.info("Robot Penyedot Berita Nusa Media dimulai");

export default {
  // Menggunakan 'secret' auth agar fungsi berjalan dengan bypass RLS (Service Role)
  fetch: withSupabase({ auth: ["secret"] }, async (req, ctx) => {
    try {
      // 1. Ambil API Key NewsAPI dari Environment Variables Supabase
      const NEWS_API_KEY = Deno.env.get('NEWS_API_KEY') ?? '';
      
      // Menggunakan supabase client bawaan dari context (ctx) yang sudah terhubung aman
      const supabase = ctx.supabase;

      // 2. Robot mulai menyedot berita viral terbaru berbahasa Indonesia
      const responNews = await fetch(
        `https://newsapi.org{NEWS_API_KEY}`
      );
      const dataNews = await responNews.json();

      // Tangkap error jika API Key NewsAPI bermasalah
      if (dataNews.status === "error") {
        return Response.json({ error: dataNews.message }, { status: 400 });
      }

      if (!dataNews.articles || dataNews.articles.length === 0) {
        return Response.json({ pesan: "Tidak ada berita baru disedot." }, { status: 200 });
      }

      // 3. Memasukkan berita ke dalam tabel database
      let jumlahBeritaBaru = 0;

      for (const artikel of dataNews.articles) {
        if (!artikel.title || !artikel.description) continue;

        // Cek agar tidak ada berita ganda di database dengan judul yang sama
        const { data: adaBerita } = await supabase
          .from('berita')
          .select('id')
          .eq('judul', artikel.title)
          .maybeSingle();

        if (!adaBerita) {
          // Buat slug sederhana dari judul untuk URL berita Astro nanti
          const slug = artikel.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

          // Simpan ke tabel 'berita'
          const { error: insertError } = await supabase.from('berita').insert([
            {
              kategori: "TREN UTAMA",
              judul: artikel.title,
              slug: slug,
              ringkasan: artikel.description,
              sumber: artikel.source.name || "Nusa Media Regional",
              url_sumber: artikel.url,
              gambar_url: artikel.urlToImage || "https://unsplash.com",
              id_video_youtube: "dQw4w9WgXcQ", 
              status: "Terbit", // Otomatis terbit agar muncul di Astro
              is_utama: false
            }
          ]);

          if (!insertError) {
            jumlahBeritaBaru++;
          }
        }
      }

      return Response.json({
        sukses: true,
        pesan: `Robot berhasil berjalan! Menambahkan ${jumlahBeritaBaru} berita baru.`
      });

    } catch (error: any) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }),
};
