var name = "Saif-App";
var files = [
    '/',
    '/index.html',
    'app.js'
];

//Activating Service Worker
self.addEventListener('activate' ,(e) => {
    console.log("Activated")
});

//Installing 
self.addEventListener('install' , (e) => {
    console.log("Installing");
    e.waitUntill(
        caches.open(name).then((e) =>{
            console.log("Service Worker Caching App Shell");
            return e.addAll(files);
        })
    );
});

//Fetching for the cache and network

self.addEventListener('fetch' , (e) => {
    e.respondWith(async function(){
        const cacheResp = await caches.match(e.request);
        return cacheResp || fetch(e.request);

    }())
});