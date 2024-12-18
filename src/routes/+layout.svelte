<script>
// @ts-nocheck

  import '../app.css';
  import '@fortawesome/fontawesome-free/css/all.css';

  let deferredPrompt = null;

// Service Worker registration
if (typeof window !== 'undefined' && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("ServiceWorker registration failed:", error);
      });
  });
}

// Listen for the "beforeinstallprompt" event
if (typeof window !== 'undefined') {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event; // Save the event for triggering later
  });
}

// Trigger the PWA installation prompt
const installApp = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Show the installation dialog
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User choice:", outcome);
    deferredPrompt = null; // Clear the deferred prompt
  }
};
</script>

<link rel="manifest" href="/manifest.json" />
<link rel="icon" href="/favicon.ico" />
<meta name="theme-color" content="#000000" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<slot />
