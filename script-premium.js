// FlowTab Premium - CSP Compliant JavaScript

// Taal instellingen
const languages = {
    nl: {
        todoTitle: "Wat is je focus vandaag?",
        todoPlaceholder: "Voeg een taak toe...",
        timerComplete: "🎉 Focus sessie voltooid! Tijd voor een korte pauze.",
        breathingText: ["Adem in...", "en uit..."],
        weekdays: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
        months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
    },
    en: {
        todoTitle: "What's your focus today?",
        todoPlaceholder: "Add a task...",
        timerComplete: "🎉 Focus session complete! Time for a short break.",
        breathingText: ["Breathe in...", "and out..."],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
};

let currentLang = localStorage.getItem('language') || 'nl';

function updateLanguage() {
    const lang = languages[currentLang];
    document.querySelector('.todo-title').textContent = lang.todoTitle;
    document.getElementById('todoInput').placeholder = lang.todoPlaceholder;
    
    // Update breathing text
    const breathingText = document.querySelector('.breathing-text');
    if (breathingText) {
        breathingText.innerHTML = `
            <div>${lang.breathingText[0]}</div>
            <div>${lang.breathingText[1]}</div>
        `;
    }
}

// Tijd en datum
function updateTime() {
    const now = new Date();
    const lang = languages[currentLang];
    
    const timeString = now.toLocaleTimeString(currentLang === 'nl' ? 'nl-NL' : 'en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: currentLang === 'en' 
    });
    
    let dateString;
    if (currentLang === 'nl') {
        const day = lang.weekdays[now.getDay()];
        const month = lang.months[now.getMonth()];
        dateString = `${day} ${now.getDate()} ${month} ${now.getFullYear()}`;
    } else {
        dateString = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    
    document.getElementById('timeDisplay').textContent = timeString;
    document.getElementById('dateDisplay').textContent = dateString;
}

// Intelligente quotes
const quotes = [
    {
        text: "De beste tijd om een boom te planten was 20 jaar geleden. De op één na beste tijd is nu.",
        author: "Chinees spreekwoord",
        context: "morning"
    },
    {
        text: "Focus is het vermogen om 'nee' te zeggen tegen honderd andere goede ideeën.",
        author: "Steve Jobs",
        context: "work"
    },
    {
        text: "Kleine stappen elke dag leiden tot grote veranderingen in een jaar.",
        author: "Anonymus",
        context: "progress"
    },
    {
        text: "Rust is niet luiheid, het is efficiëntie.",
        author: "Bruce Lee",
        context: "afternoon"
    },
    {
        text: "Wat je doet vandaag kan je morgen verbeteren.",
        author: "Ralph Marston",
        context: "evening"
    },
    {
        text: "Perfectie is bereikt, niet wanneer er niets meer toe te voegen valt, maar wanneer er niets meer weg te nemen valt.",
        author: "Antoine de Saint-Exupéry",
        context: "simplicity"
    }
];

function getContextualQuote() {
    const hour = new Date().getHours();
    const todoCount = JSON.parse(localStorage.getItem('todos') || '[]').length;
    
    let context = 'work';
    if (hour < 12) context = 'morning';
    else if (hour > 18) context = 'evening';
    else if (hour > 14) context = 'afternoon';
    
    if (todoCount === 0) context = 'simplicity';
    if (todoCount > 5) context = 'progress';
    
    const contextualQuotes = quotes.filter(q => q.context === context);
    const selectedQuotes = contextualQuotes.length > 0 ? contextualQuotes : quotes;
    
    return selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
}

function displayQuote() {
    const quote = getContextualQuote();
    document.getElementById('quoteText').textContent = `"${quote.text}"`;
    document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
}

// Achtergronden
const backgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #667db6 0%, #0082c8 25%, #0082c8 75%, #667db6 100%)'
];

let currentBgIndex = 0;

function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.getElementById('background').style.background = backgrounds[currentBgIndex];
}

function setTimeBasedBackground() {
    const hour = new Date().getHours();
    let bgIndex = 0;
    
    if (hour >= 6 && hour < 12) bgIndex = 2; // Ochtend - blauw
    else if (hour >= 12 && hour < 17) bgIndex = 4; // Middag - warm
    else if (hour >= 17 && hour < 20) bgIndex = 1; // Avond - paars/roze
    else bgIndex = 7; // Nacht - donkerder
    
    currentBgIndex = bgIndex;
    document.getElementById('background').style.background = backgrounds[bgIndex];
}

// To-Do functionaliteit
let todos = JSON.parse(localStorage.getItem('todos') || '[]');

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        // Create checkbox
        const checkbox = document.createElement('div');
        checkbox.className = `todo-checkbox ${todo.completed ? 'completed' : ''}`;
        checkbox.addEventListener('click', () => toggleTodo(index));
        
        // Create text
        const text = document.createElement('span');
        text.className = 'todo-text';
        text.textContent = todo.text;
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '×';
        deleteBtn.addEventListener('click', () => deleteTodo(index));
        
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo(text) {
    if (text.trim()) {
        todos.push({ text: text.trim(), completed: false });
        saveTodos();
        renderTodos();
        displayQuote(); // Update quote based on new todo count
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
    displayQuote(); // Update quote based on new todo count
}

// Focus Timer (Pomodoro)
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes
let isRunning = false;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                alert(languages[currentLang].timerComplete);
                resetTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

function toggleTimer() {
    const timer = document.getElementById('focusTimer');
    timer.style.display = timer.style.display === 'none' ? 'block' : 'none';
}

// Mindful Mini-Break
function startBreathing() {
    const overlay = document.getElementById('breathingOverlay');
    overlay.style.display = 'flex';
    
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 30000); // 30 seconden breathing exercise
}

// Taal wisseling
function toggleLanguage() {
    currentLang = currentLang === 'nl' ? 'en' : 'nl';
    localStorage.setItem('language', currentLang);
    updateLanguage();
    updateTime();
    displayQuote(); // Update quote to new language
    updatePinReminderLanguage(); // Update pin reminder text
    console.log('Language switched to:', currentLang);
}

// Pin Extension Reminder
function showPinReminder() {
    const pinReminder = document.getElementById('pinReminder');
    const pinDismissed = localStorage.getItem('pinReminderDismissed');

    // Only show if not previously dismissed and after a short delay
    if (!pinDismissed && pinReminder) {
        setTimeout(() => {
            pinReminder.classList.add('show');
        }, 3000); // Show after 3 seconds

        // Auto-hide after 15 seconds if not manually closed
        setTimeout(() => {
            if (pinReminder.classList.contains('show')) {
                hidePinReminder();
            }
        }, 18000);
    }
}

function hidePinReminder() {
    const pinReminder = document.getElementById('pinReminder');
    if (pinReminder) {
        pinReminder.classList.remove('show');
        // Remember that user dismissed it
        localStorage.setItem('pinReminderDismissed', 'true');
    }
}

function updatePinReminderLanguage() {
    const pinText = document.querySelector('.pin-text');
    const pinSubtexts = document.querySelectorAll('.pin-subtext');

    if (pinText && pinSubtexts.length >= 2) {
        if (currentLang === 'en') {
            pinText.textContent = 'Pin FlowTab for quick access!';
            pinSubtexts[0].textContent = '1. Click the puzzle (🧩) above';
            pinSubtexts[1].textContent = '2. Press the pin (📌) next to FlowTab';
        } else {
            pinText.textContent = 'Pin FlowTab voor snelle toegang!';
            pinSubtexts[0].textContent = '1. Klik op de puzzel (🧩) hierboven';
            pinSubtexts[1].textContent = '2. Druk op de punaise (📌) naast FlowTab';
        }
    }
}

// Initialisatie
function init() {
    updateLanguage();
    updateTime();
    setInterval(updateTime, 1000);

    setTimeBasedBackground();
    displayQuote();
    renderTodos();
    updateTimerDisplay();

    // Show pin reminder
    showPinReminder();
    updatePinReminderLanguage();

    // Update quote elke 10 minuten
    setInterval(displayQuote, 10 * 60 * 1000);
}

// Event listeners setup - CSP COMPLIANT
document.addEventListener('DOMContentLoaded', function() {
    console.log('FlowTab Premium loaded!');
    
    // Todo input event listener
    const todoInput = document.getElementById('todoInput');
    if (todoInput) {
        todoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo(this.value);
                this.value = '';
            }
        });
    }
    
    // Timer button event listeners
    const startTimerBtn = document.getElementById('startTimerBtn');
    if (startTimerBtn) {
        startTimerBtn.addEventListener('click', startTimer);
    }
    
    const pauseTimerBtn = document.getElementById('pauseTimerBtn');
    if (pauseTimerBtn) {
        pauseTimerBtn.addEventListener('click', pauseTimer);
    }
    
    const resetTimerBtn = document.getElementById('resetTimerBtn');
    if (resetTimerBtn) {
        resetTimerBtn.addEventListener('click', resetTimer);
    }
    
    // Control button event listeners
    const breathingBtn = document.getElementById('breathingBtn');
    if (breathingBtn) {
        breathingBtn.addEventListener('click', startBreathing);
    }
    
    const toggleTimerBtn = document.getElementById('toggleTimerBtn');
    if (toggleTimerBtn) {
        toggleTimerBtn.addEventListener('click', toggleTimer);
    }
    
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        languageBtn.addEventListener('click', toggleLanguage);
    }
    
    // Breathing overlay click listener
    const breathingOverlay = document.getElementById('breathingOverlay');
    if (breathingOverlay) {
        breathingOverlay.addEventListener('click', function() {
            this.style.display = 'none';
        });
    }

    // Pin reminder functionality
    const pinClose = document.getElementById('pinClose');
    if (pinClose) {
        pinClose.addEventListener('click', hidePinReminder);
    }

    // Start de app
    init();
});
