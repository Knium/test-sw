const CACHE_TARGET = {
  PATH: '/time.html',
  SAVE_NAME: 'LAST_REQUESTED'
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_TARGET.SAVE_NAME)
      .then(cache => {
        console.log('opened '+SAVE_NAME);
        return cache.add(CACHE_TARGET.SAVE_NAME)
      })
      .catch(err => console.log(err))
  );
});