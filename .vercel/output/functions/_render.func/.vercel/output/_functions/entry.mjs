import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B318OQwv.mjs';
import { manifest } from './manifest_BXYjlbpW.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/berita/_id_.astro.mjs');
const _page3 = () => import('./pages/berita/_slug_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/index.astro", _page1],
    ["src/pages/berita/[id].astro", _page2],
    ["src/pages/berita/[slug].astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ebc4b34b-cc00-4892-b00d-b1837cd97419",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
