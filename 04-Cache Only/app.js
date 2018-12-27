if("serviceWorker" in navigator){
    navigator.serviceWorker.
    register('./service-worker.js')  //file location
    .then((result) => {
        console.log("Service Worker Registered!");
        
    }).catch((err) => {
        console.log("Error While registering!");
        console.log(err);
        
    });
}
else{
    console.log("No Service Worker Found ");
}