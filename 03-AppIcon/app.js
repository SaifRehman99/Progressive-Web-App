if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("./service-worker.js")
    .then(() => {
        console.log("Service Worker Registered Succesfully");
    })
    .catch((err) => {
        console.log("Service Worker failed");
        console.log(err);
    });
}
else{
    console.log("No Service Worker Found!");
}