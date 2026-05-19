import { Q as createComponent, Z as maybeRenderHead, B as addAttribute, a5 as renderTemplate } from '../../chunks/astro/server_ILGVSC-B.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$id = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight mt-6 mb-4 hover:underline cursor-pointer"> <a${addAttribute(`/berita/${beritaUtama.slug}`, "href")}>${beritaUtama.judul}</a> </h2>
git checkout -- src/pages/berita/[id].astro`;
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
