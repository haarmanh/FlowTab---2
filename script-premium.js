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

// Meertalige quotes - 50 quotes per taal (consistent met script.js)
const quotes = {
    nl: [
        // Morning quotes (ochtend < 12:00) - 10 quotes
        {
            text: "De beste tijd om een boom te planten was 20 jaar geleden. De op één na beste tijd is nu.",
            author: "Chinees spreekwoord",
            context: "morning"
        },
        {
            text: "Elke ochtend word je opnieuw geboren. Wat je vandaag doet is wat het meest telt.",
            author: "Buddha",
            context: "morning"
        },
        {
            text: "De zon gaat elke dag op met nieuwe mogelijkheden.",
            author: "Joel Osteen",
            context: "morning"
        },
        {
            text: "Vandaag is de eerste dag van de rest van je leven.",
            author: "Abbie Hoffman",
            context: "morning"
        },
        {
            text: "Begin waar je bent. Gebruik wat je hebt. Doe wat je kunt.",
            author: "Arthur Ashe",
            context: "morning"
        },
        {
            text: "De toekomst behoort toe aan degenen die geloven in de schoonheid van hun dromen.",
            author: "Eleanor Roosevelt",
            context: "morning"
        },
        {
            text: "Succes is de som van kleine inspanningen, dag in dag uit herhaald.",
            author: "Robert Collier",
            context: "morning"
        },
        {
            text: "Je bent nooit te oud om een nieuw doel te stellen of een nieuwe droom te dromen.",
            author: "C.S. Lewis",
            context: "morning"
        },
        {
            text: "Elke expert was ooit een beginner.",
            author: "Helen Hayes",
            context: "morning"
        },
        {
            text: "De reis van duizend mijl begint met één stap.",
            author: "Lao Tzu",
            context: "morning"
        },

        // Work quotes (werk 12:00-14:00) - 10 quotes
        {
            text: "Focus is het vermogen om 'nee' te zeggen tegen honderd andere goede ideeën.",
            author: "Steve Jobs",
            context: "work"
        },
        {
            text: "Kwaliteit is geen toeval; het is altijd het resultaat van intelligente inspanning.",
            author: "John Ruskin",
            context: "work"
        },
        {
            text: "De manier om te beginnen is stoppen met praten en beginnen met doen.",
            author: "Walt Disney",
            context: "work"
        },
        {
            text: "Concentratie is de sleutel tot economische resultaten.",
            author: "Peter Drucker",
            context: "work"
        },
        {
            text: "Productiviteit is nooit een toeval. Het is altijd het resultaat van toewijding aan excellentie.",
            author: "Paul J. Meyer",
            context: "work"
        },
        {
            text: "Werk slimmer, niet harder.",
            author: "Allan F. Mogensen",
            context: "work"
        },
        {
            text: "De beste tijd om iets te doen is tussen gisteren en morgen.",
            author: "Ziglar",
            context: "work"
        },
        {
            text: "Efficiëntie is dingen goed doen; effectiviteit is de juiste dingen doen.",
            author: "Peter Drucker",
            context: "work"
        },
        {
            text: "Perfectie van middelen en verwarring van doelen lijken onze hoofdproblemen te zijn.",
            author: "Albert Einstein",
            context: "work"
        },
        {
            text: "De sleutel is niet prioriteiten stellen aan wat op je schema staat, maar je schema maken voor je prioriteiten.",
            author: "Stephen Covey",
            context: "work"
        },

        // Afternoon quotes (namiddag 14:00-18:00) - 10 quotes
        {
            text: "Rust is niet luiheid, het is efficiëntie.",
            author: "Bruce Lee",
            context: "afternoon"
        },
        {
            text: "Volharding is de harde arbeid die je doet nadat je moe bent van de harde arbeid die je al hebt gedaan.",
            author: "Newt Gingrich",
            context: "afternoon"
        },
        {
            text: "Energie en volharding overwinnen alle dingen.",
            author: "Benjamin Franklin",
            context: "afternoon"
        },
        {
            text: "Het geheim van vooruitgang is beginnen.",
            author: "Mark Twain",
            context: "afternoon"
        },
        {
            text: "Moed is niet de afwezigheid van angst, maar actie ondanks angst.",
            author: "Nelson Mandela",
            context: "afternoon"
        },
        {
            text: "Uitdagingen zijn wat het leven interessant maken; ze overwinnen is wat het leven betekenis geeft.",
            author: "Joshua J. Marine",
            context: "afternoon"
        },
        {
            text: "De enige manier om geweldig werk te doen is houden van wat je doet.",
            author: "Steve Jobs",
            context: "afternoon"
        },
        {
            text: "Geloof dat je het kunt en je bent al halverwege.",
            author: "Theodore Roosevelt",
            context: "afternoon"
        },
        {
            text: "Succes is niet definitief, falen is niet fataal: het is de moed om door te gaan die telt.",
            author: "Winston Churchill",
            context: "afternoon"
        },
        {
            text: "De enige onmogelijke reis is degene die je nooit begint.",
            author: "Tony Robbins",
            context: "afternoon"
        },

        // Evening quotes (avond > 18:00) - 10 quotes
        {
            text: "Wat je doet vandaag kan je morgen verbeteren.",
            author: "Ralph Marston",
            context: "evening"
        },
        {
            text: "Reflectie is een bloem van de geest, die gedachten geeft aan vruchten van wijsheid.",
            author: "Desiderius Erasmus",
            context: "evening"
        },
        {
            text: "De avond is de tijd om na te denken over de dag en dankbaar te zijn.",
            author: "Catherine Pulsifer",
            context: "evening"
        },
        {
            text: "Rust wanneer je moe bent, niet wanneer je klaar bent.",
            author: "James Dyson",
            context: "evening"
        },
        {
            text: "Elke dag eindigt met een kans om dankbaar te zijn voor wat je hebt bereikt.",
            author: "Oprah Winfrey",
            context: "evening"
        },
        {
            text: "De dag is voorbij, morgen is een nieuw begin.",
            author: "Abbie Hoffman",
            context: "evening"
        },
        {
            text: "Vrede komt van binnen. Zoek het niet buiten.",
            author: "Buddha",
            context: "evening"
        },
        {
            text: "Het leven is 10% wat er met je gebeurt en 90% hoe je erop reageert.",
            author: "Charles R. Swindoll",
            context: "evening"
        },
        {
            text: "Geluk is niet iets klaar gemaakt. Het komt van je eigen acties.",
            author: "Dalai Lama",
            context: "evening"
        },
        {
            text: "Morgen is de eerste dag van de rest van je leven.",
            author: "Abbie Hoffman",
            context: "evening"
        },

        // Simplicity quotes (0 taken) - 5 quotes
        {
            text: "Perfectie is bereikt, niet wanneer er niets meer toe te voegen valt, maar wanneer er niets meer weg te nemen valt.",
            author: "Antoine de Saint-Exupéry",
            context: "simplicity"
        },
        {
            text: "Eenvoud is de ultieme verfijning.",
            author: "Leonardo da Vinci",
            context: "simplicity"
        },
        {
            text: "Het vermogen om te vereenvoudigen betekent het overbodige elimineren zodat het noodzakelijke kan spreken.",
            author: "Hans Hofmann",
            context: "simplicity"
        },
        {
            text: "Minder is meer.",
            author: "Ludwig Mies van der Rohe",
            context: "simplicity"
        },
        {
            text: "In de stilte vind je antwoorden.",
            author: "Rumi",
            context: "simplicity"
        },

        // Progress quotes (6+ taken) - 5 quotes
        {
            text: "Kleine stappen elke dag leiden tot grote veranderingen in een jaar.",
            author: "Anonymus",
            context: "progress"
        },
        {
            text: "Rome werd niet op één dag gebouwd, maar ze werkten er elke dag aan.",
            author: "John Heywood",
            context: "progress"
        },
        {
            text: "Vooruitgang, niet perfectie.",
            author: "Anonymus",
            context: "progress"
        },
        {
            text: "Een reis van duizend mijl begint met een enkele stap.",
            author: "Lao Tzu",
            context: "progress"
        },
        {
            text: "Volharding is de sleutel tot alle deuren.",
            author: "Turkse spreekwoord",
            context: "progress"
        }
    ],
    en: [
        // Morning quotes (morning < 12:00) - 10 quotes
        {
            text: "The best time to plant a tree was 20 years ago. The second best time is now.",
            author: "Chinese Proverb",
            context: "morning"
        },
        {
            text: "Every morning you are born again. What you do today is what matters most.",
            author: "Buddha",
            context: "morning"
        },
        {
            text: "The sun rises every day with new possibilities.",
            author: "Joel Osteen",
            context: "morning"
        },
        {
            text: "Today is the first day of the rest of your life.",
            author: "Abbie Hoffman",
            context: "morning"
        },
        {
            text: "Start where you are. Use what you have. Do what you can.",
            author: "Arthur Ashe",
            context: "morning"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            context: "morning"
        },
        {
            text: "Success is the sum of small efforts, repeated day in and day out.",
            author: "Robert Collier",
            context: "morning"
        },
        {
            text: "You are never too old to set another goal or to dream a new dream.",
            author: "C.S. Lewis",
            context: "morning"
        },
        {
            text: "Every expert was once a beginner.",
            author: "Helen Hayes",
            context: "morning"
        },
        {
            text: "A journey of a thousand miles begins with a single step.",
            author: "Lao Tzu",
            context: "morning"
        },

        // Work quotes (work 12:00-14:00) - 10 quotes
        {
            text: "Focus is about saying no to a hundred other good ideas.",
            author: "Steve Jobs",
            context: "work"
        },
        {
            text: "Quality is never an accident; it is always the result of intelligent effort.",
            author: "John Ruskin",
            context: "work"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney",
            context: "work"
        },
        {
            text: "Concentration is the key to economic results.",
            author: "Peter Drucker",
            context: "work"
        },
        {
            text: "Productivity is never an accident. It is always the result of a commitment to excellence.",
            author: "Paul J. Meyer",
            context: "work"
        },
        {
            text: "Work smarter, not harder.",
            author: "Allan F. Mogensen",
            context: "work"
        },
        {
            text: "The best time to do something is between yesterday and tomorrow.",
            author: "Ziglar",
            context: "work"
        },
        {
            text: "Efficiency is doing things right; effectiveness is doing the right things.",
            author: "Peter Drucker",
            context: "work"
        },
        {
            text: "Perfection of means and confusion of goals seem to characterize our age.",
            author: "Albert Einstein",
            context: "work"
        },
        {
            text: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
            author: "Stephen Covey",
            context: "work"
        },

        // Afternoon quotes (afternoon 14:00-18:00) - 10 quotes
        {
            text: "Rest is not idleness, it is efficiency.",
            author: "Bruce Lee",
            context: "afternoon"
        },
        {
            text: "Perseverance is the hard work you do after you get tired of doing the hard work you already did.",
            author: "Newt Gingrich",
            context: "afternoon"
        },
        {
            text: "Energy and persistence conquer all things.",
            author: "Benjamin Franklin",
            context: "afternoon"
        },
        {
            text: "The secret of getting ahead is getting started.",
            author: "Mark Twain",
            context: "afternoon"
        },
        {
            text: "Courage is not the absence of fear, but action in spite of it.",
            author: "Nelson Mandela",
            context: "afternoon"
        },
        {
            text: "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
            author: "Joshua J. Marine",
            context: "afternoon"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            context: "afternoon"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt",
            context: "afternoon"
        },
        {
            text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill",
            context: "afternoon"
        },
        {
            text: "The only impossible journey is the one you never begin.",
            author: "Tony Robbins",
            context: "afternoon"
        },

        // Evening quotes (evening > 18:00) - 10 quotes
        {
            text: "What you do today can improve all your tomorrows.",
            author: "Ralph Marston",
            context: "evening"
        },
        {
            text: "Reflection is a flower of the mind, giving out wholesome fragrance of wisdom.",
            author: "Desiderius Erasmus",
            context: "evening"
        },
        {
            text: "Evening is the time to reflect on the day and be grateful.",
            author: "Catherine Pulsifer",
            context: "evening"
        },
        {
            text: "Rest when you're weary, not when you're done.",
            author: "James Dyson",
            context: "evening"
        },
        {
            text: "Every day ends with a chance to be grateful for what you've accomplished.",
            author: "Oprah Winfrey",
            context: "evening"
        },
        {
            text: "The day is over, tomorrow is a new beginning.",
            author: "Abbie Hoffman",
            context: "evening"
        },
        {
            text: "Peace comes from within. Do not seek it without.",
            author: "Buddha",
            context: "evening"
        },
        {
            text: "Life is 10% what happens to you and 90% how you react to it.",
            author: "Charles R. Swindoll",
            context: "evening"
        },
        {
            text: "Happiness is not something ready made. It comes from your own actions.",
            author: "Dalai Lama",
            context: "evening"
        },
        {
            text: "Tomorrow is the first day of the rest of your life.",
            author: "Abbie Hoffman",
            context: "evening"
        },

        // Simplicity quotes (0 tasks) - 5 quotes
        {
            text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
            author: "Antoine de Saint-Exupéry",
            context: "simplicity"
        },
        {
            text: "Simplicity is the ultimate sophistication.",
            author: "Leonardo da Vinci",
            context: "simplicity"
        },
        {
            text: "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.",
            author: "Hans Hofmann",
            context: "simplicity"
        },
        {
            text: "Less is more.",
            author: "Ludwig Mies van der Rohe",
            context: "simplicity"
        },
        {
            text: "In silence, you find answers.",
            author: "Rumi",
            context: "simplicity"
        },

        // Progress quotes (6+ tasks) - 5 quotes
        {
            text: "Small daily improvements lead to staggering long-term results.",
            author: "Anonymous",
            context: "progress"
        },
        {
            text: "Rome wasn't built in a day, but they were laying bricks every hour.",
            author: "John Heywood",
            context: "progress"
        },
        {
            text: "Progress, not perfection.",
            author: "Anonymous",
            context: "progress"
        },
        {
            text: "A journey of a thousand miles begins with a single step.",
            author: "Lao Tzu",
            context: "progress"
        },
        {
            text: "Persistence is the key to all doors.",
            author: "Turkish Proverb",
            context: "progress"
        }
    ]
};

function getContextualQuote() {
    const hour = new Date().getHours();
    const todoCount = JSON.parse(localStorage.getItem('todos') || '[]').length;

    let context = 'work';
    if (hour < 12) context = 'morning';
    else if (hour > 18) context = 'evening';
    else if (hour > 14) context = 'afternoon';

    if (todoCount === 0) context = 'simplicity';
    if (todoCount > 5) context = 'progress';

    // Get quotes for current language
    const currentQuotes = quotes[currentLang] || quotes.nl;
    const contextualQuotes = currentQuotes.filter(q => q.context === context);
    const selectedQuotes = contextualQuotes.length > 0 ? contextualQuotes : currentQuotes;

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
