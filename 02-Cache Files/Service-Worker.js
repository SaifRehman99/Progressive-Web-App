var cacheName = 'Saif-App';
var filesToCache = [
    '/',
    '/index.html',
    '/app.js'
];

//Activate Service Worker
self.addEventListener('activate' , (e) => {
    console.log("Service worker Activated");
});

//installing cache shell 
//wait untill open the cache shell and add all the files to the cache  app shell

self.addEventListener('install' ,(e) => {
    console.log('Installing Cache Shell');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log("Caching app Shell");
            return cache.addAll(filesToCache);

        })
    );
});


//fetch the information
//respond with the cache 

self.addEventListener('fetch' , (e) => {
    console.log('Service worker Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request)
        })
    );
});