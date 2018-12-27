var cacheName = "SAIF";
var filesCache = [
    '/',
    '/index.html',
    '/app.js'
];

//Activating Service Worker
self.addEventListener('activate' , (e) =>{
    console.log("Activating Service Worker");
});

//Installing Cache Shell
self.addEventListener('install' , (e)=>{
    console.log("Installing Cache Shell");
    e.waitUntill(
        caches.open(cacheName).then((cache)  => {
            console.log("Caching Files");
            return cache.addAll(filesCache);
        })
    );
});


//fetching request to the cache for the data

self.addEventListener('fetch' , (e) => {
    //If no match or cache found it will retur a connection error 
    e.respondWith(caches.match(e.request));
});