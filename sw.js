const CACHE_NAME="bike-profit-tracker-v1";
const APP_SHELL=["./","./Bike_Part_Time_Profit_Tracker_PWA.html","./manifest.json"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",event=>{if(event.request.method!=="GET")return;const u=new URL(event.request.url);if(u.hostname.includes("firebase")||u.hostname.includes("googleapis"))return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(c=>c.put(event.request,copy));return response;}).catch(()=>caches.match("./Bike_Part_Time_Profit_Tracker_PWA.html")));});
