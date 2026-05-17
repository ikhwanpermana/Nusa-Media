// Robot Penyedot Berita Otomatis Nusa Media
import { createClient } from 'https://esm.sh'

Deno.serve(async (req) => {
  try {
    // 1. Konfigurasi Kunci Akses Cloud Supabase & NewsAPI
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const NEWS_API_KEY = Deno.env.get('NEWS_API_KEY') ?? '';

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // 2. Robot mulai menyedot berita tren/viral terbaru berbahasa Indonesia
    const responNews = await fetch(
      `https://newsapi.org{NEWS_API_KEY}`
    );
    const dataNews = await responNews.json();

    if (!dataNews.articles || dataNews.articles.length === 0) {
      return new Response(JSON.stringify({ pesan: "Tidak ada berita baru disedot." }), { status: 200 });
    }

    // 3. Memasukkan berita yang lolos sensor hak cipta ke dalam Gudang Data
    for (const artikel of dataNews.articles) {
      if (!artikel.title || !artikel.description) continue;

      // Cek apakah berita dengan judul ini sudah pernah disedot sebelumnya agar tidak ganda
      const { data: adaBerita } = await supabase
        .from('berita')
        .select('id')
        .eq('judul', artikel.title)
        .maybeSingle();

      if (!adaBerita) {
        // Robot otomatis menyusun data multimedia & tautan balik hukum hak cipta
        await supabase.from('berita').insert([
          {
            kategori: "TREN UTAMA",
            judul: artikel.title,
            ringkasan: artikel.description,
            sumber: artikel.source.name || "Nusa Media Regional",
            url_sumber: artikel.url,
            url_gambar: artikel.urlToImage || "https://unsplash.com", // gambar cadangan otomatis
            id_video_youtube: "dQw4w9WgXcQ" // ID pemutar video bawaan (bisa diubah nanti)
          }
        ]);
      }
    }

    return new Response(JSON.stringify({ sukses: true, pesan: "Robot berhasil menyedot berita FYP!" }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
})
