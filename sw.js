const CACHE_NAME = 'red-canudos-v5';
const assetsToCache = [
    './',
    './index.html',
    './admin.html',
    './detalhes-noticia.html',
    './detalhes-partida.html',
    './detalhes-time.html',
    './estatisticas.html',
    './hall.html',
    './jogadores.html',
    './noticia.html',
    './partidas.html',
    './regras.html',
    './tabela.html',
    './times.html',
    './style.css',
    './script.js',
    './Logo Canudos.jpg',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return Promise.allSettled(
                assetsToCache.map(url => cache.add(url).catch(err => console.log('Aviso cache:', url, err)))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});