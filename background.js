// FlowTab Background Service Worker
console.log('FlowTab background service worker loaded');

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
    console.log('FlowTab installed:', details.reason);

    if (details.reason === 'install') {
        // Set first install flag
        chrome.storage.local.set({ 'firstInstall': true });
    }
});
