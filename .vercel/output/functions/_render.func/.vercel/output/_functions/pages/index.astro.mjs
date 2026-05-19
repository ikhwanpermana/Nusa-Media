/* empty css                                 */
import { Q as createComponent, B as addAttribute, a1 as renderHead, a4 as renderSlot, a6 as renderTemplate, O as createAstro, $ as renderComponent, Z as maybeRenderHead } from '../chunks/astro/server_BdknY_pA.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from '../chunks/supabase_ydpuITTZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Nusa Media" } = Astro2.props;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="description" content="Nusa Media Website"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/workspaces/Nusa-Media/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: daftarBerita, error } = await supabase.from("berita").select("*").order("dibuat_pada", { ascending: false });
  if (error) {
    console.error("Gagal mengambil berita:", error.message);
  }
  return renderTemplate`<!-- 2. BAGIAN BAWAH (HTML & TAILWIND) --><!-- Tempat menyusun tampilan halaman -->${renderComponent($$result, "Layout", $$Layout, { "title": "Nusa Media - Berita Terbaru" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto p-4"> <h1 class="text-3xl font-bold mb-6">Berita Terbaru</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${daftarBerita?.map((berita) => {
    const listVideo = Array.isArray(berita.id_video_youtube) ? berita.id_video_youtube : [];
    return renderTemplate`<div class="border p-4 rounded-lg shadow-sm bg-white"> <h2 class="text-xl font-bold mb-2">${berita.judul}</h2> <p class="text-gray-600 mb-4">${berita.ringkasan}</p> ${listVideo.length > 0 && renderTemplate`<div class="space-y-4 mt-4"> <h3 class="text-sm font-semibold text-gray-500">Video Terkait:</h3> ${listVideo.map((idVideo) => renderTemplate`<div class="aspect-video w-full"> <iframe class="w-full h-full rounded"${addAttribute(`https://youtube.com{idVideo}`, "src")} title="YouTube video player" frameborder="0" allowfullscreen></iframe> </div>`)} </div>`} </div>`;
  })} </div> </main> ` })}`;
}, "/workspaces/Nusa-Media/src/pages/index.astro", void 0);

const $$file = "/workspaces/Nusa-Media/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
