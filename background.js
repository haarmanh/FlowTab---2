// FlowTab Background Service Worker
// Handles installation events and background tasks

// Listen for extension installation or update
chrome.runtime.onInstalled.addListener((details) => {
    console.log('FlowTab extension installed/updated:', details.reason);

    // Open welcome page when the extension is installed for the first time
    if (details.reason === 'install') {
        console.log('Opening welcome page on first install');
        chrome.tabs.create({
            url: chrome.runtime.getURL('welcome.html')
        });

        // Set a flag to show pin reminder on first new tab
        chrome.storage.local.set({ 'firstInstall': true });
    }

    // Handle updates - could show changelog or welcome back message
    if (details.reason === 'update') {
        console.log('FlowTab extension updated to version:', chrome.runtime.getManifest().version);
        const previousVersion = details.previousVersion;
        console.log('Updated from version:', previousVersion);

        // For major updates, you could show a "What's New" page
        // chrome.tabs.create({
        //     url: chrome.runtime.getURL('whats-new.html')
        // });
    }
});

// Handle when extension is enabled (after being disabled)
chrome.management.onEnabled.addListener((info) => {
    if (info.id === chrome.runtime.id) {
        console.log('FlowTab extension re-enabled');
        // Open welcome page when re-enabled to remind users of features
        chrome.tabs.create({
            url: chrome.runtime.getURL('welcome.html')
        });
    }
});

// Handle extension startup (browser restart)
chrome.runtime.onStartup.addListener(() => {
    console.log('FlowTab extension started with browser');
    // Could perform any startup tasks here
});
