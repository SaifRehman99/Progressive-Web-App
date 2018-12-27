if("serviceWorker" in navigator){ //navigator Windows Object
    navigator.serviceWorker
    .register("./service-worker.js") //file location
    .then(() => {
        console.log("Service Worker Registered Succesfully");

    })
    .catch((err) => {
        console.log("Error while Registering Service Worker");
        console.log(err)
    })
}

else {
    console.log("No Service Worker found in your Browser");
}
