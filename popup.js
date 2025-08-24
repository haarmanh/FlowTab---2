// FlowTab Popup JavaScript

function openNewTab() {
    // Check if we're in an extension context
    if (typeof chrome !== 'undefined' && chrome.tabs) {
        chrome.tabs.create({});
        window.close();
    } else {
        // Fallback for testing
        window.open('newtab.html', '_blank');
    }
}

function clearData() {
    if (confirm('Weet je zeker dat je alle opgeslagen taken wilt wissen?')) {
        try {
            // Try Chrome extension storage first
            if (typeof chrome !== 'undefined' && chrome.storage) {
                chrome.storage.local.clear(() => {
                    alert('Alle data is gewist!');
                });
            } else {
                // Fallback to localStorage
                localStorage.removeItem('todos');
                alert('Alle data is gewist!');
            }
        } catch (error) {
            console.error('Error clearing data:', error);
            alert('Er is een fout opgetreden bij het wissen van data.');
        }
    }
}

function showInfo() {
    const info = `FlowTab - Focus New Tab Extensie

Features:
• Live klok en datum
• Intelligente motivatie quotes
• Minimale to-do lijst
• Pomodoro focus timer (25 min)
• Mindfulness breathing exercises
• Tijdsgebaseerde achtergronden

Gemaakt voor productiviteit en welzijn.

Versie: 1.0.0`;

    alert(info);
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', function() {
    console.log('FlowTab popup loaded');

    // Check extension context
    if (typeof chrome === 'undefined' || !chrome.tabs) {
        console.warn('Extension APIs not available - running in test mode');
    }

    // Add event listeners to buttons
    const newTabBtn = document.getElementById('newTabBtn');
    if (newTabBtn) {
        newTabBtn.addEventListener('click', openNewTab);
    }

    const clearDataBtn = document.getElementById('clearDataBtn');
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', clearData);
    }

    const infoBtn = document.getElementById('infoBtn');
    if (infoBtn) {
        infoBtn.addEventListener('click', showInfo);
    }
});
