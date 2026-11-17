/* Offline: keeps the app shell cached. Supabase requests go straight to the network. */
const CACHE = "studiotraino-v4";
const SHELL = ["./", "index.html", "config.js", "vendor/supabase.js", "manifest.webmanifest",
  "icons/icon-64.png", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === "navigate";
  // Pages: network first so updates show up, cache when offline. Everything else: cache first, refresh in background.
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(isPage ? "index.html" : req, { ignoreSearch: isPage });
    const net = fetch(req).then(r => { if (r.ok) c.put(isPage ? "index.html" : req, r.clone()); return r; });
    if (isPage) return net.catch(() => hit);
    e.waitUntil(net.catch(() => {}));
    return hit || net;
  }));
});
