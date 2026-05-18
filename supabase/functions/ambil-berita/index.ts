// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

console.info("Robot Penyedot Berita GNews Nusa Media dimulai");

export default {
  // Hanya menerima otentikasi 'secret' (Service Role Key) agar aman dari pihak luar
  fetch: withSupabase({ auth: ["secret"] }, async (req, ctx) => {
    try {
      // 1. Ambil API Key GNews dari Environment Variables cloud Supabase
      const GNEWS_API_KEY = Deno.env.get('GNEWS_API_KEY') ?? '';
      const supabase = ctx.supabase;

      // 2. Ambil top 5 berita berbahasa Indonesia (max=5 agar hemat memori)
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

      // 3. Tarik semua judul berita yang sudah ada di database agar tidak ganda
      const { data: listBeritaAda } = await supabase.from('berita').select('judul');
      const setJudulAda = new Set(listBeritaAda?.map(b => b.judul) || []);
      const dataAkanDimasukkan = [];

      // 4. Olah data artikel yang didapat dari internet
      for (const artikel of dataNews.articles) {
        if (!artikel.title || !artikel.description) continue;
        if (setJudulAda.has(artikel.title)) continue; // Lewati jika sudah ada di DB

        // Membuat slug URL otomatis dari judul berita
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
          status: "Terbit", // Otomatis terbit agar terbaca oleh aplikasi Astro Anda
          is_utama: false
        });
      }

      // 5. Masukkan semua data baru sekaligus menggunakan teknik Bulk Insert
      if (dataAkanDimasukkan.length > 0) {
        const { error: insertError } = await supabase.from('berita').insert(dataAkanDimasukkan);
        if (insertError) throw new Error(insertError.message);
      }

      return Response.json({
        sukses: true,
        pesan: `Robot berhasil berjalan! Menambahkan ${dataAkanDimasukkan.length} berita baru ke database.`
      });

    } catch (error: any) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }),
};
