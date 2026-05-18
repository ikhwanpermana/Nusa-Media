import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

console.info("Robot Hemat Memori Nusa Media dimulai");

export default {
  fetch: withSupabase({ auth: ["secret"] }, async (req, ctx) => {
    try {
      const GNEWS_API_KEY = Deno.env.get('GNEWS_API_KEY') ?? '';
      const supabase = ctx.supabase;

      // 1. Ambil data berita (Batasi hanya ambil top 5 berita agar hemat memori)
      const responNews = await fetch(
        `https://gnews.io{GNEWS_API_KEY}`
      );
      const dataNews = await responNews.json();

      if (dataNews.errors) {
        return Response.json({ error: dataNews.errors }, { status: 400 });
      }

      if (!dataNews.articles || dataNews.articles.length === 0) {
        return Response.json({ pesan: "Tidak ada berita baru disedot." }, { status: 200 });
      }

      // 2. Tarik semua judul yang sudah ada di DB sekaligus (Mengurangi beban query berulang)
      const { data: listBeritaAda } = await supabase
        .from('berita')
        .select('judul');
      
      const setJudulAda = new Set(listBeritaAda?.map(b => b.judul) || []);
      const dataAkanDimasukkan = [];

      // 3. Olah data di memori secara kilat
      for (const artikel of dataNews.articles) {
        if (!artikel.title || !artikel.description) continue;
        
        // Lewati jika judul sudah ada di database
        if (setJudulAda.has(artikel.title)) continue;

        const slug = artikel.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '');

        dataAkanDimasukkan.push({
          kategori: "TREN UTAMA",
          judul: artikel.title,
          slug: slug,
          ringkasan: artikel.description,
          sumber: artikel.source.name || "Nusa Media Regional",
          url_sumber: artikel.url,
          gambar_url: artikel.image || "https://unsplash.com",
          id_video_youtube: "dQw4w9WgXcQ", 
          status: "Terbit",
          is_utama: false
        });
      }

      // 4. Kirim semua data sekaligus ke database dalam 1 kali ketukan (Sangat hemat resource)
      if (dataAkanDimasukkan.length > 0) {
        const { error: insertError } = await supabase
          .from('berita')
          .insert(dataAkanDimasukkan);

        if (insertError) throw new Error(insertError.message);
      }

      return Response.json({
        sukses: true,
        pesan: `Robot berhasil! Memproses ${dataAkanDimasukkan.length} berita baru.`
      });

    } catch (error: any) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }),
};
