export function registerSw() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(() => {
                    console.log('Service worker registered');
                })
                .catch((err) => {
                    console.log('Error on service worker registration', err);
                });
        });
    }
}
