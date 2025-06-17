// --- Preguntas (Mantenidas de tu ejemplo original) ---
const questions = [
    {
        riddle: "¿Quiénes somos la dupla que dio vida en papel a esta historia de nieve mortal y resistencia?",
        answer: "Héctor Germán Oesterheld (guion) y Francisco Solano López (dibujos)",
        options: [
            "Héctor Germán Oesterheld (guion) y Francisco Solano López (dibujos)",
            "Hugo Pratt (guion) y Alberto Breccia (dibujos)",
            "Francisco Solano López (guion) y Héctor Germán Oesterheld (dibujos)",
            "Alberto Breccia (guion) y Hugo Pratt (dibujos)"
        ]
    },
    {
        riddle: "En mis páginas, la nevada cayó por primera vez en 1957. ¿De qué año hablamos?",
        answer: "1957",
        options: ["1957", "1959", "1969", "1976"]
    },
    {
        riddle: "Nací por entregas en las páginas de esta revista seminal de historietas argentinas. ¿Cuál era su nombre principal?",
        answer: "Hora Cero Semanal",
        options: ["Hora Cero Semanal", "Patoruzú", "Skorpio", "Misterix"]
    },
    {
        riddle: "Mi publicación original en 'Hora Cero Semanal' tuvo un fin. ¿En qué año ocurrió, según las fuentes?",
        answer: "1959",
        options: ["1957", "1959", "1969", "1977"]
    },
     {
        riddle: "Oesterheld invitó a varios artistas, como Hugo Pratt y Francisco Solano López, para fundar una editorial en 1955. ¿Cómo se llamó esa editorial?",
        answer: "Editorial Frontera",
        options: ["Editorial Columba", "Editorial Perfil", "Editorial Frontera", "Ediciones de la Urraca"]
    },
     {
        riddle: "Además del Eternauta, di vida a otros personajes en papel, como Sargento Kirk y Rolo, el marciano. ¿Quién fui yo?",
        answer: "Héctor Germán Oesterheld",
        options: ["Francisco Solano López", "Hugo Pratt", "Alberto Breccia", "Héctor Germán Oesterheld"]
    },
    {
        riddle: "Soy el concepto fundamental de 'héroe' en El Eternauta, enfatizando que la salvación no es individual. ¿Cuál es la frase clave que resume esta idea, popularizada también por la serie?",
        answer: "Nadie se salva solo",
        options: [
            "El conocimiento es poder",
            "Nadie se salva solo",
            "La unión hace la fuerza",
            "Siempre hay esperanza"
        ]
    },
    {
        riddle: "En el cómic original, mi historia empieza conmigo, un hombre misterioso, apareciendo ante un guionista en su estudio. ¿Quién soy yo, el narrador de mi propia tragedia?",
        answer: "Juan Salvo (El Eternauta)",
        options: [
            "Héctor Germán Oesterheld (El Guionista)",
            "Juan Salvo (El Eternauta)",
            "Favalli (El Científico)",
            "Polsky (El Amigo)"
        ]
    },
    {
        riddle: "Lo que desencadenó todo fue un fenómeno atmosférico inusual y mortal que cayó del cielo. ¿Qué fue?",
        answer: "Una nevada fosforescente que mata a todo aquel que toca",
        options: [
            "Una lluvia ácida venenosa",
            "Una tormenta de arena radioactiva",
            "Una nevada fosforescente que mata a todo aquel que toca",
            "Un terremoto devastador"
        ]
    },
    {
        riddle: "Al inicio de la historia en la casa de Juan Salvo, estábamos jugando a las cartas. Eramos Favalli, Lucas y yo... ¿Quién falta en este trío inicial?",
        answer: "Polsky",
        options: ["Omar", "Oesterheld", "Polsky", "Elena"]
    },
    {
        riddle: "Entre los invasores o seres controlados por 'Ellos', había criaturas con caparazones duros y otras con manos enormes. Nombra dos tipos.",
        answer: "Cascarudos y Manos",
        options: [
            "Grises y Reptilianos",
            "Zombies y Mutantes",
            "Cascarudos y Manos",
            "Saurios y Gurbos"
        ]
    },
    {
        riddle: "Mi estructura narrativa en el cómic original es particular: soy un viajero del tiempo que le cuenta su historia al propio autor. ¿Cómo se describe este montaje temporal?",
        answer: "Un montaje temporal dislocado (metaficción)",
        options: [
            "Una narración lineal cronológica",
            "Una serie de flashbacks sin orden",
            "Un montaje temporal dislocado (metaficción)",
            "Un diario personal"
        ]
    },
    {
        riddle: "Al final del cómic original de 1957, mi destino es claro: me convierto en un viajero errante. ¿Cuál es mi objetivo principal en esta nueva existencia?",
        answer: "Seguir buscando a su esposa e hija a través del tiempo",
        options: [
            "Derrotar a los invasores viajando al pasado",
            "Construir un refugio seguro para los sobrevivientes",
            "Seguir buscando a su esposa e hija a través del tiempo",
            "Advertir a otras civilizaciones del peligro"
        ]
    },
    {
        riddle: "Soy el director encargado de llevar esta épica historia a la pantalla para Netflix. ¿Quién soy?",
        answer: "Bruno Stagnaro",
        options: ["Luis Puenzo", "Bruno Stagnaro", "Pablo Trapero", "Damián Szifron"]
    },
     {
        riddle: "En la serie de Netflix, me tocó interpretar al protagonista, Juan Salvo. ¿Quién soy el actor?",
        answer: "Ricardo Darín",
        options: ["Rodrigo de la Serna", "Guillermo Francella", "Ricardo Darín", "Leonardo Sbaraglia"]
    },
    {
        riddle: "Doy vida a Elena, la esposa de Juan Salvo, en la adaptación de Netflix. ¿Cómo me llamo?",
        answer: "Carla Peterson",
        options: ["Mercedes Morán", "Dolores Fonzi", "Carla Peterson", "Valeria Bertuccelli"]
    },
    {
        riddle: "Para mantener el 'tono 100% argentino', la serie de Netflix se filmó en esta icónica ciudad. ¿Cuál es?",
        answer: "Buenos Aires",
        options: ["Rosario", "Córdoba", "Buenos Aires", "Mendoza"]
    },
    {
        riddle: "La primera temporada de la serie de Netflix cuenta con este número de episodios. ¿Cuántos son?",
        answer: "6",
        options: ["8", "10", "6", "12"]
    },
    {
        riddle: "Sobre la serie de Netflix, la pregunta del millón era si continuaría. Según las fuentes, ¿ya está confirmada la segunda temporada?",
        answer: "Sí, la serie ya tiene confirmada su segunda temporada",
        options: [
            "No, aún está en conversaciones",
            "Sí, la serie ya tiene confirmada su segunda temporada",
            "Depende del éxito de la primera",
            "Solo se planeó una miniserie"
        ]
    },
    {
        riddle: "A diferencia del cómic que empieza en el estudio de Oesterheld, la serie de Netflix arranca con una escena inédita y visualmente impactante. ¿Dónde y con quiénes comienza?",
        answer: "Con tres mujeres en un velero en el Río de la Plata",
        options: [
            "Con Juan Salvo jugando al truco en su casa",
            "Con una transmisión de radio alertando sobre la nevada",
            "En el estudio de Oesterheld, con la llegada del Eternauta",
            "Con tres mujeres en un velero en el Río de la Plata"
        ]
    },
    {
        riddle: "Para justificar su habilidad con las armas en la serie (a diferencia del reservista en el cómic), a Juan Salvo se le dio este trasfondo militar diferente. ¿Cuál es?",
        answer: "Es un excombatiente de Malvinas",
        options: [
            "Es un exmiembro de una fuerza especial",
            "Es un excombatiente de Malvinas",
            "Es un reservista de la policía",
            "Es un veterano de guerra civil"
        ]
    },
    {
        riddle: "La relación entre Juan y Elena tiene una diferencia clave en la serie respecto al cómic. ¿Cuál es?",
        answer: "En la serie están separados, en el cómic están casados",
        options: [
            "En la serie ella es científica, en el cómic no",
            "En la serie están separados, en el cómic están casados",
            "En la serie ella muere al principio, en el cómic sobrevive más tiempo",
            "En la serie tienen más hijos"
        ]
    },
    {
        riddle: "Se agregó un quinto amigo al grupo inicial que jugaba al truco en la serie de Netflix, alguien que no estaba en el cómic. ¿Quién es?",
        answer: "Omar",
        options: ["Alberto", "Carlos", "Omar", "Fernando"]
    },
     {
        riddle: "La serie de Netflix introdujo un personaje femenino nuevo, descrito como una repartidora de otro país. ¿Cómo se llama (aparte de Pecas)?",
        answer: "Inga (repartidora venezolana)",
        options: [
            "Sofía (doctora)",
            "María (periodista)",
            "Ana (maestra)",
            "Inga (repartidora venezolana)"
        ]
    },
     {
        riddle: "El cómic original tiene unas 350 páginas. Aunque las fuentes no dan un número exacto, ¿qué parte del cómic cubre aproximadamente la primera temporada de la serie?",
        answer: "La primera parte, enfocada en la nevada inicial y los primeros momentos",
        options: [
            "Toda la historia completa",
            "Solo los viajes en el tiempo",
            "La primera parte, enfocada en la nevada inicial y los primeros momentos",
            "Una historia completamente nueva"
        ]
    },
    {
        riddle: "La 'nevada mortal' ha sido interpretada como una ficción que anticipaba eventos oscuros en Argentina. ¿A qué momento histórico se la ha asociado premonitoriamente?",
        answer: "La dictadura militar argentina",
        options: [
            "La crisis económica de 2001",
            "La Guerra de Malvinas",
            "La dictadura militar argentina",
            "La Revolución Libertadora de 1955"
        ]
    },
    {
        riddle: "Fui el guionista, y mi destino durante la última dictadura militar fue trágico, siendo secuestrado y desaparecido junto a mis hijas y yernos. ¿Quién fui yo?",
        answer: "Héctor Germán Oesterheld",
        options: ["Francisco Solano López", "Hugo Pratt", "Alberto Breccia", "Héctor Germán Oesterheld"]
    },
     {
        riddle: "Un crítico de The New York Times advirtió que la serie de Netflix a veces se inclina demasiado hacia el drama emocional, describiéndola como algo disfrazado de ciencia ficción. ¿Cómo la llamó Mike Hale?",
        answer: "Una suerte de \"telenovela disfrazada de ciencia ficción\"",
        options: [
            "Un documental encubierto",
            "Una comedia de errores",
            "Una epopeya espacial",
            "Una suerte de \"telenovela disfrazada de ciencia ficción\""
        ]
    },
    {
        riddle: "El nieto de Oesterheld, consultor de la serie, señaló un evento histórico previo al cómic que pudo influir en su origen. ¿Cuál fue ese evento de 1955?",
        answer: "El bombardeo de la Plaza de Mayo en 1955",
        options: [
            "La asunción de Juan Domingo Perón",
            "La crisis de 1930",
            "El bombardeo de la Plaza de Mayo en 1955",
            "La Semana Trágica de 1919"
        ]
    },
     {
        riddle: "Además del cómic original y la serie de Netflix, hubo otras versiones o continuaciones de esta historia. Nombra al menos otra mencionada en las fuentes (aparte de la de Breccia o la de 1976).",
        answer: "El Eternauta 2 (con Solano López) o un capítulo adicional cuarenta años después (con Maiztegui y Solano López)",
        options: [
            "El Eternauta: El Regreso",
            "El Eternauta Zero",
            "El Eternauta 2 (con Solano López)",
            "La precuela de Favalli"
        ]
    },
     {
        riddle: "Según las fuentes, ¿qué pensaba el dibujante Francisco Solano López sobre las interpretaciones políticas que surgieron del cómic original?",
        answer: "Opinaba que no tuvieron una intencionalidad política al crearla, sino que surgió de la casualidad y el inconsciente colectivo de los lectores de la época",
        options: [
            "Creía que Oesterheld sí tenía una intención política clara",
            "Opinaba que era una obra puramente de ciencia ficción sin lecturas políticas",
            "Consideraba que solo él tuvo la intención política, no Oesterheld",
            "Opinaba que no tuvieron una intencionalidad política al crearla, sino que surgió de la casualidad y el inconsciente colectivo de los lectores de la época"
        ]
    }
];


// --- Feedback Messages ---
const correctFeedbackMessages = [
    "¡Correcto! Como un héroe colectivo avanzando.", "¡Exacto! Conocimiento clave para sobrevivir.",
    "¡Así se habla! Directo al blanco.", "¡Muy bien! Estás sintonizado con la resistencia.",
    "¡Excelente! Esa es la posta.", "¡Afirmativo! Sobreviviente informado.",
    "¡La pegaste! Como Juan Salvo encontrando un traje."
];
const incorrectFeedbackMessages = [
    "Incorrecto. La nevada te confundió.", "Uhmm, no. Los Manos te acechan.",
    "Casi, pero no. Revisa tus archivos.", "Respuesta errónea. Un Gurb te sopló mal la data.",
    "No es por ahí. Cuidado con los Cascarudos.", "¡Error! Te cantaron falta envido.",
    "Negativo. Esa info no te salva."
];

// --- Audio Player Utility ---
const soundEffects = {
    'game-start': new Audio('sounds/game-start.mp3'),
    'click': new Audio('sounds/click.mp3'),
    'answer-select': new Audio('sounds/answer-select.mp3'),
    'correct': new Audio('sounds/correct.mp3'),
    'incorrect': new Audio('sounds/incorrect.mp3'),
    'skip': new Audio('sounds/skip.mp3'),
    'game-end': new Audio('sounds/game-end.mp3'),
};
const backgroundMusic = new Audio('sounds/background-music.mp3');
let isMuted = false; // This will be controlled by the mute button later

function playSound(soundName) {
    if (isMuted || !soundEffects[soundName]) {
        return;
    }
    const sound = soundEffects[soundName];
    sound.currentTime = 0; // Rewind to start if already playing
    sound.play().catch(error => console.warn(`Error playing sound ${soundName}:`, error));
}
// --- End Audio Player Utility ---

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let questionStatus = []; // { selectedOption: string, isCorrect: boolean, feedbackMessage: string, type: 'answered'|'skipped' }

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx0e_ejCf8uFyOxqecyEJvQjPIpv3beF25x4Dm4L7RRF85aACeEZzJY9BIdxrHZTeoblA/exec';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@AdrianPizzurno';

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const skipButton = document.getElementById('skip-button');
const restartButton = document.getElementById('restart-button');
const riddleText = document.getElementById('riddle-text');
const answerOptionsDiv = document.getElementById('answer-options');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const currentQElement = document.getElementById('current-q');
const totalQElement = document.getElementById('total-q');
const registrationForm = document.getElementById('registration-form');
const playerNameInput = document.getElementById('player-name');
const playerEmailInput = document.getElementById('player-email');
const playerCountryInput = document.getElementById('player-country');
const referredByEmailInput = document.getElementById('referred-by-email');
const finalScoreInput = document.getElementById('final-score-input');
const registrationFeedbackElement = document.getElementById('registration-feedback');
const leaderboardList = document.getElementById('leaderboard-list');
const leaderboardLoading = document.getElementById('leaderboard-loading');
const muteButton = document.getElementById('mute-button');
const muteIcon = document.getElementById('mute-icon');

// Initialize background music settings
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2; // Adjusted volume


function toggleMute() {
    isMuted = !isMuted;
    muteButton.classList.toggle('muted', isMuted);
    muteIcon.textContent = isMuted ? '🔇' : '🔊';

    if (isMuted) {
        backgroundMusic.pause();
        // Stop all currently playing short sound effects
        for (const key in soundEffects) {
            if (soundEffects.hasOwnProperty(key)) {
                soundEffects[key].pause();
                soundEffects[key].currentTime = 0;
            }
        }
    } else {
        // Only play if game has started or is in a state where music should play
        // Check if quizScreen is not hidden (game is active)
        if (!quizScreen.classList.contains('hidden') && backgroundMusic.paused) {
             backgroundMusic.play().catch(error => console.warn("Error playing background music:", error));
        }
        // If on start screen and user un-mutes, music will start when startGame() is called by startButton
    }
}

if(muteButton) { // Ensure button exists before adding listener
    muteButton.addEventListener('click', () => {
        playSound('click'); // Play click sound for mute button itself, before toggling mute
        toggleMute();
    });
}


startButton.addEventListener('click', () => {
    // playSound('click'); // startButton click sound is now part of its main event listener
    // playSound('game-start') is in startGame()
    startGame();
});
nextButton.addEventListener('click', () => {
    playSound('click');
    navigateNext();
});
prevButton.addEventListener('click', () => {
    playSound('click');
    navigatePrevious();
});
skipButton.addEventListener('click', () => {
    // playSound('click'); // Removed to prevent double sound. skipQuestion() handles playSound('skip').
    skipQuestion();
});
restartButton.addEventListener('click', () => {
    playSound('click');
    restartGame();
});
registrationForm.addEventListener('submit', (event) => {
    // playSound('click'); // Added in handleRegistrationSubmit
    handleRegistrationSubmit(event);
});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function startGame() {
    if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.length < 50 || !GOOGLE_APPS_SCRIPT_URL.startsWith("https://script.google.com/macros/s/")) {
        console.warn("ADVERTENCIA: GOOGLE_APPS_SCRIPT_URL no parece ser una URL válida de Google Apps Script en script.js.");
    }
    playSound('game-start'); // This plays before mute state is checked for background music

    if (!isMuted && backgroundMusic.paused) {
        backgroundMusic.play().catch(error => console.warn("Error playing background music:", error));
    }

    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = score;
    feedbackElement.textContent = '';
    feedbackElement.classList.remove('feedback-visible'); // Clear feedback visibility
    registrationFeedbackElement.textContent = '';
    registrationForm.reset();
    leaderboardList.innerHTML = '';
    shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
    questionStatus = new Array(shuffledQuestions.length).fill(null);
    totalQElement.textContent = shuffledQuestions.length;

    // Determine current screen to fade out
    let currentScreenToHide = null;
    if (!startScreen.classList.contains('hidden')) {
        currentScreenToHide = startScreen;
    } else if (!endScreen.classList.contains('hidden')) {
        currentScreenToHide = endScreen;
    }
    // Else, if neither is visible (e.g. very first load), currentScreenToHide remains null.

    if (currentScreenToHide) {
        currentScreenToHide.style.opacity = '0';
        setTimeout(() => {
            currentScreenToHide.classList.add('hidden');
            // currentScreenToHide.style.opacity = ''; // Reset opacity for future use if needed, though not strictly necessary if hidden then opacity set to 0 before showing

            quizScreen.classList.remove('hidden');
            quizScreen.style.opacity = '0';
            void quizScreen.offsetWidth; // Reflow
            quizScreen.style.opacity = '1';

            updateNavigationButtonsVisibility();
            displayQuestion();
        }, 400);
    } else { // First load case, no current screen to hide, just show quizScreen
        startScreen.classList.add('hidden'); // Ensure start is hidden if it wasn't explicitly the one to hide
        endScreen.classList.add('hidden');   // Ensure end is hidden
        quizScreen.classList.remove('hidden');
        quizScreen.style.opacity = '0';
        void quizScreen.offsetWidth; // Reflow
        quizScreen.style.opacity = '1';

        updateNavigationButtonsVisibility();
        displayQuestion();
    }
}

function displayQuestion() {
    if (currentQuestionIndex < 0 || currentQuestionIndex >= shuffledQuestions.length) {
        if (currentQuestionIndex >= shuffledQuestions.length) endGame();
        return;
    }
    const questionData = shuffledQuestions[currentQuestionIndex];
    const status = questionStatus[currentQuestionIndex];
    riddleText.innerHTML = questionData.riddle;
    answerOptionsDiv.innerHTML = '';
    feedbackElement.textContent = '';
    feedbackElement.classList.remove('feedback-visible'); // Clear feedback visibility before new question
    currentQElement.textContent = currentQuestionIndex + 1;
    const optionsToDisplay = questionData.options;

    optionsToDisplay.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('comic-button', 'answer-button');
        if (status && status.selectedOption === option) {
            button.classList.add(status.isCorrect ? 'correct' : 'incorrect');
        }
        if (status) {
            button.disabled = true;
            if (option === questionData.answer) {
                 button.classList.add('correct-option-highlight');
            }
        } else {
            button.addEventListener('click', () => {
                playSound('answer-select');
                checkAnswer(option, questionData.answer, button);
            });
        }
        answerOptionsDiv.appendChild(button);
    });

    if (status) {
        if (status.isCorrect !== undefined) { // Si fue respondida (correcta o incorrecta)
            feedbackElement.textContent = status.feedbackMessage;
            feedbackElement.className = `feedback ${status.isCorrect ? 'correct' : 'incorrect'}`;
            feedbackElement.classList.add('feedback-visible'); // Ensure visibility if re-displaying
        } else if (status.type === 'skipped') { // Si fue omitida
            feedbackElement.textContent = "Pregunta omitida.";
            feedbackElement.className = 'feedback'; // Estilo neutral
            feedbackElement.classList.add('feedback-visible'); // Ensure visibility if re-displaying
        }
    }
    updateNavigationButtonsVisibility();
}

function checkAnswer(selectedOption, correctAnswer, clickedButton) {
    if (questionStatus[currentQuestionIndex]) return; // Ya interactuó con esta pregunta
    const isCorrect = selectedOption === correctAnswer;
    let feedbackMessage = "";

    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
        // Score animation
        const scoreAreaElement = scoreElement.parentElement; // Assuming scoreElement is #score, parent is .score-area
        if (scoreAreaElement) {
            scoreAreaElement.classList.add('score-updated');
            setTimeout(() => {
                scoreAreaElement.classList.remove('score-updated');
            }, 500); // Duration of the animation
        }
        // Correct answer pulse/glow
        quizScreen.classList.add('correct-answer-pulse');
        setTimeout(() => {
            quizScreen.classList.remove('correct-answer-pulse');
        }, 600); // Duration of correctPulse animation
        playSound('correct');

        feedbackMessage = correctFeedbackMessages[Math.floor(Math.random() * correctFeedbackMessages.length)];
        feedbackElement.className = 'feedback correct';
        clickedButton.classList.add('correct');
    } else {
        // Screen shake for incorrect answer
        document.body.classList.add('shake-effect');
        setTimeout(() => {
            document.body.classList.remove('shake-effect');
        }, 300); // Duration of screenShake animation
        playSound('incorrect');

        feedbackMessage = incorrectFeedbackMessages[Math.floor(Math.random() * incorrectFeedbackMessages.length)];
        feedbackElement.className = 'feedback incorrect';
        clickedButton.classList.add('incorrect');
    }
    feedbackElement.textContent = feedbackMessage;
    feedbackElement.classList.add('feedback-visible'); // Show feedback with animation
    questionStatus[currentQuestionIndex] = {
        selectedOption: selectedOption,
        isCorrect: isCorrect,
        feedbackMessage: feedbackMessage,
        type: 'answered'
    };
    answerOptionsDiv.querySelectorAll('.answer-button').forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct-option-highlight');
        }
    });
    updateNavigationButtonsVisibility();
}

function skipQuestion() {
    if (questionStatus[currentQuestionIndex]) return;
    playSound('skip');
    questionStatus[currentQuestionIndex] = { type: 'skipped', feedbackMessage: "Pregunta omitida." };
    feedbackElement.textContent = "Pregunta omitida.";
    feedbackElement.className = 'feedback';
    feedbackElement.classList.add('feedback-visible'); // Show feedback with animation
    answerOptionsDiv.querySelectorAll('.answer-button').forEach(button => button.disabled = true);
    updateNavigationButtonsVisibility();
    if (currentQuestionIndex < shuffledQuestions.length -1) {
        nextButton.classList.remove('hidden'); // Mostrar Siguiente para avanzar
    } else {
        endGame(); // Si es la última, terminar
    }
}

function navigateNext() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        endGame();
    }
    updateNavigationButtonsVisibility();
}

function navigatePrevious() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
    updateNavigationButtonsVisibility();
}

function updateNavigationButtonsVisibility() {
    const status = questionStatus[currentQuestionIndex];

    prevButton.classList.toggle('hidden', currentQuestionIndex === 0);
    prevButton.disabled = currentQuestionIndex === 0;

    if (status) { // Si la pregunta actual ya fue respondida u omitida
        nextButton.classList.remove('hidden');
        skipButton.classList.add('hidden');
        skipButton.disabled = true;
    } else { // Pregunta activa, no respondida ni omitida
        nextButton.classList.add('hidden');
        skipButton.classList.remove('hidden');
        skipButton.disabled = false;
    }
    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        // Si es la última pregunta
        if (status) { // y ya fue respondida/omitida
            nextButton.textContent = "Finalizar"; // Cambiar texto del botón
        } else { // y no ha sido respondida
            skipButton.disabled = true; // No se puede omitir la última si no se ha interactuado
        }
    } else {
        nextButton.textContent = "Siguiente";
    }
}

function endGame() {
    quizScreen.style.opacity = '0';
    setTimeout(() => {
        quizScreen.classList.add('hidden');
        // quizScreen.style.opacity = ''; // Reset opacity for future

        endScreen.classList.remove('hidden');
        endScreen.style.opacity = '0';
        void endScreen.offsetWidth; // Reflow
        endScreen.style.opacity = '1';

        finalScoreElement.textContent = score;
        finalScoreInput.value = score;
        fetchLeaderboard();
        playSound('game-end');
    }, 400);
    backgroundMusic.pause(); // Pause background music when game ends
}

function restartGame() {
    // startGame will handle fading out endScreen and fading in quizScreen
    startGame();
}

async function handleRegistrationSubmit(event) {
    event.preventDefault();
    playSound('click');
    const playerName = playerNameInput.value.trim();
    const playerEmail = playerEmailInput.value.trim();
    const playerCountry = playerCountryInput.value.trim();
    const referredBy = referredByEmailInput.value.trim();
    const registrationType = document.querySelector('input[name="regType"]:checked').value;
    const finalScore = finalScoreInput.value;

    if (!playerName || !playerEmail || !playerCountry) {
        registrationFeedbackElement.textContent = 'Por favor, completa Nombre, Correo y País.';
        registrationFeedbackElement.className = 'feedback incorrect';
        return;
    }
    if (referredBy && !isValidEmail(referredBy)) {
        registrationFeedbackElement.textContent = 'El email del referente no es válido. Déjalo vacío o ingresa un email correcto.';
        registrationFeedbackElement.className = 'feedback incorrect';
        return;
    }

    const registerButton = registrationForm.querySelector('button[type="submit"]');
    registerButton.disabled = true; registerButton.textContent = 'Enviando...';
    registrationFeedbackElement.textContent = 'Registrando datos...'; registrationFeedbackElement.className = 'feedback';

    const dataToSend = {
        name: playerName, email: playerEmail, country: playerCountry,
        type: registrationType, referredByEmail: referredBy
    };
    if (registrationType === 'score') dataToSend.score = finalScore;

    try {
        if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.length < 50 || !GOOGLE_APPS_SCRIPT_URL.startsWith("https://script.google.com/macros/s/")) {
            throw new Error("URL del script de Google no configurada correctamente.");
        }
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST', mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
            body: new URLSearchParams(dataToSend).toString()
        });
        let successMessage = "¡Datos enviados!";
        if (registrationType === 'score') {
             successMessage = '¡Puntuación registrada! Si mencionaste un referente válido, sus puntos fueron actualizados.';
            setTimeout(fetchLeaderboard, 2000);
        } else if (registrationType === 'ai') {
            successMessage = '¡Gracias por tu interés! Redirigiendo a YouTube...';
            if (YOUTUBE_CHANNEL_URL && YOUTUBE_CHANNEL_URL.length > 20) {
                setTimeout(() => { window.open(YOUTUBE_CHANNEL_URL, '_blank'); }, 2000);
            } else {
                console.warn("URL de YouTube no configurada."); successMessage += " (URL de YouTube no lista)";
            }
        }
        registrationFeedbackElement.textContent = successMessage;
        registrationFeedbackElement.className = 'feedback correct';
        registrationForm.reset();
    } catch (error) {
        console.error('Error al registrar:', error);
        registrationFeedbackElement.textContent = `Error: ${error.message}. Consola para detalles.`;
        registrationFeedbackElement.className = 'feedback incorrect';
    } finally {
        registerButton.disabled = false; registerButton.textContent = 'Enviar Datos';
    }
}

async function fetchLeaderboard() {
    leaderboardList.innerHTML = '';
    leaderboardLoading.classList.remove('hidden');
    leaderboardLoading.textContent = 'Cargando leaderboard...';
    leaderboardLoading.classList.remove('incorrect', 'correct');

    if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.length < 50 || !GOOGLE_APPS_SCRIPT_URL.startsWith("https://script.google.com/macros/s/")) {
        leaderboardLoading.textContent = 'Error: URL del script para leaderboard no configurada.';
        leaderboardLoading.classList.add('incorrect');
        console.error("fetchLeaderboard: GOOGLE_APPS_SCRIPT_URL no configurada.");
        return;
    }
    try {
        // Añadimos un parámetro 'action' para ser explícitos, aunque doGet por defecto lo maneja.
        // 'nocache' es para evitar que el navegador use una respuesta cacheada.
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL + "?action=getLeaderboard&nocache=" + new Date().getTime(), { method: 'GET' });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error HTTP Leaderboard:", response.status, errorText); // Ver el texto del error
            throw new Error(`Error HTTP ${response.status}. Respuesta del servidor: ${errorText.substring(0, 200)}`); // Mostrar parte de la respuesta
        }
        const topScores = await response.json(); // Esto fallará si la respuesta no es JSON válido
        leaderboardLoading.classList.add('hidden');
        if (topScores.error) {
            console.error("Error desde Apps Script Leaderboard:", topScores.error);
            leaderboardList.innerHTML = `<li>Error: ${escapeHTML(topScores.error)}</li>`;
            if(leaderboardList.querySelector('li')) leaderboardList.querySelector('li').classList.add('incorrect');
        } else if (!topScores || topScores.length === 0) {
            leaderboardList.innerHTML = '<li>Aún no hay héroes en la lista. ¡Sé el primero!</li>';
        } else {
            topScores.forEach((entry, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<span>${index + 1}. ${escapeHTML(entry.name)}</span> <span>${escapeHTML(String(entry.score))} pts</span>`;
                leaderboardList.appendChild(listItem);
            });
        }
    } catch (error) {
        console.error('Excepción al cargar leaderboard:', error);
        leaderboardLoading.textContent = `Error al cargar: ${error.message}`; // Mostrar el mensaje de error de la excepción
        leaderboardLoading.classList.add('incorrect');
        leaderboardList.innerHTML = '';
    }
}

function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    // CORRECCIÓN AQUÍ:
    const entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;', // o &apos;
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    return String(str).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    startScreen.classList.remove('hidden');
    startScreen.style.opacity = '1'; // Start screen visible initially
    quizScreen.classList.add('hidden');
    quizScreen.style.opacity = '0'; // Other screens start transparent and hidden
    endScreen.classList.add('hidden');
    endScreen.style.opacity = '0';
    scoreElement.textContent = 0;

    // Initialize mute button state
    if (muteButton && muteIcon) {
        muteIcon.textContent = isMuted ? '🔇' : '🔊';
        muteButton.classList.toggle('muted', isMuted);
    }

    updateNavigationButtonsVisibility(); // Initial call for start screen
});