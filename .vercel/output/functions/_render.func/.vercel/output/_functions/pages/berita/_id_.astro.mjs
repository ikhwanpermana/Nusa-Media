/* empty css                                    */
import { Q as createComponent, a1 as renderHead, a6 as renderTemplate, O as createAstro } from '../../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from '../../chunks/supabase_ydpuITTZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const { data: artikel, error } = await supabase.from("berita").select("*").eq("id", id).single();
  if (error || !artikel) {
    console.error("Eror Supabase:", error);
    return Astro2.redirect("/404");
  }
  return renderTemplate`<html lang="id"> <head><meta charset="utf-8"><title>${artikel.judul}</title><!-- Tambahkan meta tag SEO atau Tailwind jika diperlukan -->${renderHead()}</head> <body class="bg-gray-50 text-gray-900 antialiased"> <main class="max-w-3xl mx-auto px-4 py-8"> <!-- Tombol Kembali --> <a href="/" class="text-blue-600 hover:underline text-sm mb-4 inline-block">&larr; Kembali ke Beranda</a> <!-- Konten Berita --> <article class="prose lg:prose-xl mt-4"> <h1 class="text-3xl font-bold tracking-tight sm:text-4xl mb-2"> ${artikel.judul} </h1> <!-- Format Tanggal (Sesuaikan nama kolom tanggal Anda di Supabase, misal: created_at) --> ${artikel.created_at && renderTemplate`<p class="text-sm text-gray-500 mb-6">
Dipublikasikan pada: ${new Date(artikel.created_at).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </p>`} <!-- Isi Konten Berita --> <div class="mt-6 leading-relaxed text-lg text-gray-700 whitespace-pre-line"> ${artikel.konten} </div> </article> </main> </body></html>`;
}, "/workspaces/Nusa-Media/src/pages/berita/[id].astro", void 0);

const $$file = "/workspaces/Nusa-Media/src/pages/berita/[id].astro";
const $$url = "/berita/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
