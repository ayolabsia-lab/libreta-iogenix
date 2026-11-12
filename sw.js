/* La app se ha mudado a /notegym-iogenix/: este service worker borra la caché antigua y se desinstala. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.map((k) => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then((cs) => cs.forEach((c) => c.navigate('https://ayolabsia-lab.github.io/notegym-iogenix/'))));
});
