// FlowTab Welcome Page JavaScript

// Language support
const languages = {
    nl: {
        title: "Welkom bij FlowTab!",
        subtitle: "Je nieuwe productiviteits-partner is geïnstalleerd en klaar voor gebruik",
        installComplete: "🎉 Installatie Voltooid!",
        installDescription: "FlowTab vervangt nu je standaard nieuwe tab pagina met een krachtige productiviteits-hub. Elke keer dat je een nieuwe tab opent, krijg je toegang tot focus tools, taken beheer, en mindfulness features.",
        stepsTitle: "🚀 Zo gebruik je FlowTab",
        ctaTitle: "Klaar om te beginnen?",
        ctaDescription: "Open een nieuwe tab en ervaar de kracht van FlowTab!",
        tryNowBtn: "Probeer Nu",
        pinExtensionBtn: "📌 Pin Extensie",
        features: {
            clock: {
                title: "Live Klok & Datum",
                description: "Altijd de actuele tijd en datum in beeld. Perfect voor tijdsbewustzijn tijdens je werk."
            },
            quotes: {
                title: "Slimme Quotes",
                description: "Motiverende quotes die veranderen op basis van het tijdstip en je aantal taken. Blijf geïnspireerd!"
            },
            todos: {
                title: "Minimale To-Do Lijst",
                description: "Voeg taken toe, markeer ze als voltooid, en houd je focus. Alles wordt automatisch opgeslagen."
            },
            timer: {
                title: "Pomodoro Timer",
                description: "25-minuten focus sessies met pauze herinneringen. Bewezen effectief voor productiviteit."
            },
            breathing: {
                title: "Mini-Break Oefeningen",
                description: "30-seconden ademhalingsoefeningen om stress te verminderen en focus te herstellen."
            },
            backgrounds: {
                title: "Dynamische Achtergronden",
                description: "Achtergronden die automatisch veranderen op basis van het tijdstip, of handmatig wisselen."
            }
        },
        steps: [
            {
                title: "📌 Pin de Extensie",
                description: "Klik op de puzzel in je browser toolbar en pin FlowTab voor snelle toegang tot instellingen."
            },
            {
                title: "🆕 Open een Nieuwe Tab",
                description: "Druk Ctrl+T (of Cmd+T op Mac) om FlowTab te zien in plaats van de standaard nieuwe tab."
            },
            {
                title: "✅ Voeg Taken Toe",
                description: "Type je eerste taak in het invoerveld en druk Enter. Klik op taken om ze als voltooid te markeren."
            },
            {
                title: "⏱️ Start een Focus Sessie",
                description: "Klik op 'Focus Timer' om een 25-minuten Pomodoro sessie te starten en productief te blijven."
            },
            {
                title: "🧘 Neem een Mini-Break",
                description: "Gebruik de 'Mini-Break' knop voor een snelle ademhalingsoefening wanneer je stress voelt."
            }
        ]
    },
    en: {
        title: "Welcome to FlowTab!",
        subtitle: "Your new productivity partner is installed and ready to use",
        installComplete: "🎉 Installation Complete!",
        installDescription: "FlowTab now replaces your default new tab page with a powerful productivity hub. Every time you open a new tab, you get access to focus tools, task management, and mindfulness features.",
        stepsTitle: "🚀 How to Use FlowTab",
        ctaTitle: "Ready to get started?",
        ctaDescription: "Open a new tab and experience the power of FlowTab!",
        tryNowBtn: "Try Now",
        pinExtensionBtn: "📌 Pin Extension",
        features: {
            clock: {
                title: "Live Clock & Date",
                description: "Always see the current time and date. Perfect for time awareness during work."
            },
            quotes: {
                title: "Smart Quotes",
                description: "Motivational quotes that change based on time of day and your task count. Stay inspired!"
            },
            todos: {
                title: "Minimal To-Do List",
                description: "Add tasks, mark them complete, and stay focused. Everything is automatically saved."
            },
            timer: {
                title: "Pomodoro Timer",
                description: "25-minute focus sessions with break reminders. Proven effective for productivity."
            },
            breathing: {
                title: "Mini-Break Exercises",
                description: "30-second breathing exercises to reduce stress and restore focus."
            },
            backgrounds: {
                title: "Dynamic Backgrounds",
                description: "Backgrounds that automatically change based on time of day, or switch manually."
            }
        },
        steps: [
            {
                title: "📌 Pin the Extension",
                description: "Click the puzzle icon in your browser toolbar and pin FlowTab for quick access to settings."
            },
            {
                title: "🆕 Open a New Tab",
                description: "Press Ctrl+T (or Cmd+T on Mac) to see FlowTab instead of the default new tab."
            },
            {
                title: "✅ Add Tasks",
                description: "Type your first task in the input field and press Enter. Click tasks to mark them complete."
            },
            {
                title: "⏱️ Start a Focus Session",
                description: "Click 'Focus Timer' to start a 25-minute Pomodoro session and stay productive."
            },
            {
                title: "🧘 Take a Mini-Break",
                description: "Use the 'Mini-Break' button for a quick breathing exercise when you feel stressed."
            }
        ]
    }
};

let currentLang = localStorage.getItem('language') || 'nl';

// Update page content based on language
function updateLanguage() {
    const lang = languages[currentLang];
    
    // Update main content
    document.querySelector('.title').textContent = lang.title;
    document.querySelector('.subtitle').textContent = lang.subtitle;
    
    // Update welcome card
    const welcomeCard = document.querySelector('.welcome-card');
    welcomeCard.querySelector('h2').textContent = lang.installComplete;
    welcomeCard.querySelector('p').textContent = lang.installDescription;
    
    // Update features
    const featureCards = document.querySelectorAll('.feature-card');
    const featureKeys = Object.keys(lang.features);
    featureCards.forEach((card, index) => {
        if (featureKeys[index]) {
            const feature = lang.features[featureKeys[index]];
            card.querySelector('.feature-title').textContent = feature.title;
            card.querySelector('.feature-description').textContent = feature.description;
        }
    });
}

// Add steps section dynamically
function addStepsSection() {
    const lang = languages[currentLang];
    const container = document.querySelector('.container');
    
    const stepsSection = document.createElement('div');
    stepsSection.className = 'steps-section';
    stepsSection.innerHTML = `
        <h2 class="steps-title">${lang.stepsTitle}</h2>
        <div class="steps-container">
            ${lang.steps.map((step, index) => `
                <div class="step" style="animation-delay: ${0.1 * (index + 1)}s;">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-content">
                        <h3 class="step-title">${step.title}</h3>
                        <p class="step-description">${step.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Insert before the last element (CTA section will be added after)
    container.appendChild(stepsSection);
}

// Add CTA section
function addCTASection() {
    const lang = languages[currentLang];
    const container = document.querySelector('.container');
    
    const ctaSection = document.createElement('div');
    ctaSection.className = 'cta-section';
    ctaSection.innerHTML = `
        <h2 style="font-size: 2rem; margin-bottom: 15px;">${lang.ctaTitle}</h2>
        <p style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 30px;">${lang.ctaDescription}</p>
        <button class="cta-button" id="tryNowBtn">${lang.tryNowBtn}</button>
        <button class="cta-button secondary" id="pinExtensionBtn">${lang.pinExtensionBtn}</button>
    `;
    
    container.appendChild(ctaSection);
}

// Event handlers
function openNewTab() {
    if (typeof chrome !== 'undefined' && chrome.tabs) {
        chrome.tabs.create({});
    } else {
        window.open('newtab.html', '_blank');
    }
}

function showPinInstructions() {
    alert(currentLang === 'nl' ? 
        'Klik op het puzzel icoon (⋮⋮⋮) in je browser toolbar en selecteer "FlowTab - Focus New Tab" om de extensie te pinnen.' :
        'Click the puzzle icon (⋮⋮⋮) in your browser toolbar and select "FlowTab - Focus New Tab" to pin the extension.'
    );
}

// Language toggle
function toggleLanguage() {
    currentLang = currentLang === 'nl' ? 'en' : 'nl';
    localStorage.setItem('language', currentLang);
    location.reload(); // Reload to update all content
}

// Add language toggle button
function addLanguageToggle() {
    const header = document.querySelector('.header');
    const langBtn = document.createElement('button');
    langBtn.className = 'cta-button secondary';
    langBtn.style.cssText = 'position: absolute; top: 20px; right: 20px; padding: 10px 20px; font-size: 0.9rem;';
    langBtn.textContent = currentLang === 'nl' ? '🌐 English' : '🌐 Nederlands';
    langBtn.addEventListener('click', toggleLanguage);
    header.appendChild(langBtn);
}

// Initialize page
function init() {
    updateLanguage();
    addStepsSection();
    addCTASection();
    addLanguageToggle();
    
    // Add event listeners after CTA section is created
    setTimeout(() => {
        const tryNowBtn = document.getElementById('tryNowBtn');
        const pinExtensionBtn = document.getElementById('pinExtensionBtn');
        
        if (tryNowBtn) {
            tryNowBtn.addEventListener('click', openNewTab);
        }
        
        if (pinExtensionBtn) {
            pinExtensionBtn.addEventListener('click', showPinInstructions);
        }
    }, 100);
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('FlowTab Welcome page loaded!');
    init();
    
    // Add some interactive effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 * (index + 1)}s`;
    });
});

// Add some sparkle effects
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: sparkleFloat 3s ease-out forwards;
    `;
    
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

// Add sparkle animation CSS
const sparkleCSS = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0);
        }
        50% {
            opacity: 1;
            transform: translateY(-50px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
        }
    }
`;

const style = document.createElement('style');
style.textContent = sparkleCSS;
document.head.appendChild(style);

// Create sparkles periodically
setInterval(createSparkle, 2000);
