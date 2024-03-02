self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('heavy-cache').then((cache) => cache.addAll([
        '/home/',
        '/home/index.html',
        '/home/index.js',
        '/home/style.css',
        '/home/anubhav.js',
        '/home/particle.html',
        'https://shattereddisk.github.io/rickroll/rickroll.mp4',
        'https://cdn.jsdelivr.net/npm/three@0.122.0/build/three.min.js',
        'https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js',
        'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });