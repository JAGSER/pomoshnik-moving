// Старый адрес больше не хранит приложение: чистим кэш и снимаем себя, чтобы всегда открывалась страница переезда.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.map((k) => caches.delete(k)))).then(() => self.registration.unregister()).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => e.respondWith(fetch(e.request)));
