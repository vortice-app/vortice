importScripts('/sheild/m/bundle.js')
importScripts('/sheild/m/config.js')
importScripts('/sheild/m/sw.js')

const sw = new UVServiceWorker()
let userKey = new URL(location).searchParams.get('userkey')

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)))
