// Xeer Files service worker.
// Static assets (JS/CSS/fonts/images) use stale-while-revalidate: the cached copy
// is served immediately for speed, while a background fetch refreshes the cache
// for next time. This matters even for content-hashed production builds, but is
// essential in dev mode where chunk URLs aren't hashed and pure cache-first would
// freeze the app on whatever was cached first. Pages are network-first so content
// stays fresh, falling back to the cache (or the homepage shell) when offline.
const CACHE_NAME = 'xeer-files-v2';
const STATIC_ASSET_PATTERN = /\.(?:js|css|woff2?|ttf|png|jpg|jpeg|svg|ico|mjs)$/;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (STATIC_ASSET_PATTERN.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request);
        const networkFetch = fetch(request)
          .then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          })
          .catch(() => undefined);
        return cached || (await networkFetch) || Response.error();
      })
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match(request)) || (await cache.match('/'));
      })
  );
});
