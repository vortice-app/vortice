importScripts("/cuboid/static/uv/uv.bundle.js");
importScripts("/cuboid/static/uv/uv.config.js");
importScripts("/cuboid/static/uv/uv.sw.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));