if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/Buget/sw.js")
            .then(registration => {
                console.log("Service Worker registered:", registration.scope);
            })
            .catch(error => {
                console.error("Service Worker registration failed:", error);
            });
    });
}
