var shellName = "Saif";
var filesCache = [
    '/',
    '/app.js',
    '/index.html',
    '/manifest.json'
];

//Activating my Service Worker

self.addEventListener("activate" , (e) => {
    console.log("Activated Your Service Worker!");
})



//installing cache shell
//wait untill the cache shell open and add all tge files to the cache
self.addEventListener('install' ,(e) => {
    console.log('Installing Cache Shell');
    e.waitUntil(
        caches.open(shellName).then((cache) => {
            console.log("Caching app Shell");
            return cache.addAll(filesCache);

        })
    );
});



//fetching the informations
self.addEventListener('fetch' , (e) => {
    console.log("Fetching " ,e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    )
})
