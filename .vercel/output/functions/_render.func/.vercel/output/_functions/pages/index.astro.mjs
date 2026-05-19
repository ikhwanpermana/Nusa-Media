import { Q as createComponent, a1 as renderHead, B as addAttribute, a5 as renderTemplate, O as createAstro } from '../chunks/astro/server_ILGVSC-B.mjs';
import 'kleur/colors';
import 'clsx';
import { createClient } from '@supabase/supabase-js';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const judulSitus = "NUSA MEDIA";
  const tagline = "Suara Nusantara, Jendela Dunia";
  const tanggalHariIni = (/* @__PURE__ */ new Date()).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const urlSupabase = "https://supabase.co";
  const keySupabase = "";
  const supabase = createClient(urlSupabase, keySupabase);
  Astro2.response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  const url = new URL(Astro2.request.url);
  const kataKunci = url.searchParams.get("search") || "";
  let beritaSampingan = [];
  let beritaUtama = null;
  try {
    if (urlSupabase && keySupabase) ;
  } catch (e) {
    console.error("Gagal terhubung ke database cloud:", e);
  }
  if (beritaSampingan.length === 0) {
    beritaSampingan = [
      {
        kategori: "TEKNOLOGI",
        judul: "Kecerdasan Buatan Mulai Merambah Ruang Redaksi Media Digital Nusantara",
        slug: "ai-merambah-redaksi",
        gambar_url: "https://unsplash.com",
        sumber: "Nusa Network"
      }
    ];
  }
  if (!beritaUtama) {
    beritaUtama = {
      kategori: "POLITIK & EKONOMI",
      judul: "Transformasi Digital Indonesia Timur: Infrastruktur Cloud Merambah Pelosok",
      slug: "transformasi-digital",
      ringkasan: "Pembangunan pusat data nasional berskala besar resmi dimulai. Proyek ini diprediksi memangkas biaya teknologi bagi media lokal seluruh negeri.",
      sumber: "Redaksi",
      gambar_url: "https://unsplash.com"
    };
  }
  return renderTemplate`<html lang="id"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${judulSitus} - ${tagline}</title>${renderHead()}</head> <body class="bg-[#111111] text-[#E5E5E5] font-sans antialiased selection:bg-white selection:text-black"> <header class="border-b border-[#2A2A2A] py-6 px-4 text-center"> <p class="text-xs tracking-[0.2em] text-gray-500 uppercase mb-2">${tanggalHariIni}</p> <h1 class="text-5xl md:text-7xl font-serif font-black tracking-tighter text-white my-3 cursor-pointer hover:opacity-90"> <a href="/">${judulSitus}</a> </h1> <div class="border-t border-b border-[#2A2A2A] py-2 mt-4 max-w-xl mx-auto"> <p class="text-xs italic tracking-widest text-gray-400 uppercase">${tagline}</p> </div> </header> <div class="max-w-7xl mx-auto px-4 pt-6"> <form method="GET" action="/" class="flex gap-2 max-w-xl mx-auto"> <input type="text" name="search"${addAttribute(kataKunci, "value")} placeholder="Cari arsip berita..." class="w-full bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors font-mono"> <button type="submit" class="bg-white text-black px-5 py-2 text-xs uppercase font-black tracking-widest hover:bg-gray-200">Cari</button> ${kataKunci && renderTemplate`<a href="/" class="border border-[#2A2A2A] text-gray-400 px-3 py-2 text-xs uppercase flex items-center hover:text-white">Reset</a>`} </form> </div> <main class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">  <div class="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#2A2A2A] pb-8 lg:pb-0 lg:pr-8"> <article class="h-full flex flex-col justify-between"> <div> <span class="text-xs font-bold tracking-widest text-white border-b border-white pb-1 uppercase">${beritaUtama.kategori}</span> <h2 class="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight mt-6 mb-4 hover:underline"> <a${addAttribute(`/berita/${beritaUtama.slug}`, "href")}>${beritaUtama.judul}</a> </h2> <img${addAttribute(beritaUtama.gambar_url, "src")}${addAttribute(beritaUtama.judul, "alt")} class="w-full aspect-video object-cover mb-4 border border-[#2A2A2A] grayscale hover:grayscale-0 transition-all duration-300"> <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">${beritaUtama.ringkasan}</p> </div> <div class="flex items-center justify-between text-xs text-gray-500"> <span>Oleh <strong class="text-gray-300">${beritaUtama.sumber}</strong></span> <span>Headline</span> </div> </article> </div>  <section class="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#2A2A2A] pb-8 lg:pb-0 lg:pr-8 flex flex-col justify-between"> <div class="space-y-8"> <h3 class="text-xs font-black tracking-widest uppercase text-gray-400 mb-4">${kataKunci ? "HASIL ARSIP" : "TREN POPULER (FYP)"}</h3> ${beritaSampingan.map((berita, index) => renderTemplate`<div class="pb-6 border-b border-[#2A2A2A] last:border-0 last:pb-0"> <span class="text-[10px] tracking-widest text-gray-400 uppercase font-mono">0${index + 1} / ${berita.kategori}</span> ${berita.gambar_url && renderTemplate`<img${addAttribute(berita.gambar_url, "src")}${addAttribute(berita.judul, "alt")} class="w-full aspect-video object-cover my-3 border border-[#2A2A2A] grayscale hover:grayscale-0 transition-all duration-300">`} <h4 class="text-base font-bold text-white leading-snug mt-2 hover:text-gray-300 line-clamp-3"> <a${addAttribute(`/berita/${berita.slug}`, "href")}>${berita.judul}</a> </h4> <p class="text-xs text-gray-500 mt-1">Oleh ${berita.sumber}</p> </div>`)} </div> </section>  <aside class="lg:col-span-3 space-y-6"> <h3 class="text-xs font-black tracking-widest uppercase text-gray-400">SPONSOR UTAMA</h3> <div class="w-full bg-[#1A1A1A] border border-[#2A2A2A] aspect-square flex items-center justify-center text-xs text-gray-600 uppercase">[ IKLAN #2 ]</div> </aside> </main> </body></html>`;
}, "/workspaces/Nusa-Media/src/pages/index.astro", void 0);
const $$file = "/workspaces/Nusa-Media/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
