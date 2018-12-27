if("serviceWorker" in  navigator){
    navigator.serviceWorker.register
    ('./service-worker.js').then((result) => {
        console.log("Service Worker Registered Successfully");
        console.log(result);
    }).catch((err) => {
        console.log("Error while registering Service Worker! ");
        console.log(err);
        
    });

}
else{
    console.log("No Service Worker Found");
}