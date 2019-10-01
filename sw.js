const VERSION = "v1";

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') {
    return;
  }
  // buscar cache
  event.respondWith(cachedResponse(request))

  // actualizar
  event.waitUntil(updateCache(request))
})

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.css',
    '/assets/index.js',
    '/assets/demo.mp4',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPause.js',
    '/assets/plugins/AutoPlay.js',
    'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    // '/sw.js'
  ])
}


async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  // return cache if exist
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
