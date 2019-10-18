'use strict';

// If browser supports service worker, attempt to register it.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(response => console.log(`Service worker registered.`, response))
      .catch(error =>
        console.error(`Service worker registration failed.`, error)
      );
  });
}

const cacheName = 'GardnerScreensaverCache';

// Check if request is in cache. If found return it. If not attempt to cache it and then return it.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        // A matching cache is found, return it.
        if (response) return response;

        // Not found in cache attempt to store it, then return it.
        return fetch(event.request.clone()) //, { mode: 'no-cors' })
          .then(response => {
            caches
              .open(cacheName)
              .then(cache => cache.put(event.request, response.clone()))
              .catch(error => console.error(`Cache attempt failed:`, error));
            return response.clone();
          });
      })
      .catch(error => {
        return new Response('Content not available.', {
          status: 404,
          statusText: error.message
        });
      })
  );
});
