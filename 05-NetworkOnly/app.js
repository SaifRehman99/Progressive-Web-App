if("serviceWorker" in navigator){
    navigator.serviceWorker.register
    ('./service.worker.js')
    .then((result) => {
        console.log("Service Worker Registered Successfully!");
        console.log(result);
        
    }).catch((err) => {
        console.log("Error While Registering!");
        console.log(err);
        
    });

}
else{
    console.log("No service Worker found");
}