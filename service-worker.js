const addResourcesToCache = async (resources) => {
    const cache = await caches.open('cache');
    await cache.addAll(resources);
};
const self = this;
this.addEventListener("install", (event) => {
    try {
        event.waitUntil(addResourcesToCache([
            '/icons/maskable_icon_x128.png',
            '/icons/maskable_icon_x192.png',
            '/icons/maskable_icon_x48.png',
            '/icons/maskable_icon_x512.png',
            '/icons/maskable_icon_x72.png',
            '/icons/maskable_icon_x96.png',
            '/icons/mushroom.png',
            '/images/matheus-cenali.webp',
            '/images/tomasz-filipek.webp',
            '/images/thanh-soledas.webp',
            'images/podworko-w-ropicy-polskiej.jpg'
        ]));
    } catch(error) {
        console.error(error);
    }
});
this.addEventListener('fetch', (event) => {
    event.respondWith(async function () {
        try {
            const response = await fetch(event.request);
            const cache = await caches.open('cache');
            cache.put(event.request.url, response.clone());
            return response;
        } catch (error) {
            return caches.match(event.request);
        }
    }());
});
