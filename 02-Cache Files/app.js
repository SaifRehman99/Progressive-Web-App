if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("./Service-Worker.js") //service worker file location
    .then(() => {

        console.log("Service Worker Registered!");
    })
    .catch((err) => {
        console.log("Error while registering service worker");
        console.log(err);

    })
}
else{
    console.log("No Service worker found");
}