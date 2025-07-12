// Base de conocimientos del chatbot
const cosmicKnowledge = {
    "saludo": "¡Saludos, buscador de luz! 🌠 Soy tu Guía Cósmica. Elige una pregunta para comenzar...",
    "sueños": "🌙 <strong>Sueños:</strong> Son mensajes del subconsciente. Si sueñas con:<br><br>- <strong>Volar:</strong> Deseo de libertad.<br>- <strong>Agua turbia:</strong> Emociones no resueltas.<br>- <strong>Caídas:</strong> Miedos ocultos. <br><br>Lleva un diario onírico para descifrarlos.",
    "señales": "🔮 <strong>Señales del universo:</strong><br><br>- <strong>Números repetidos (111, 333):</strong> Confirmación de tu camino.<br>- <strong>Plumas o mariposas:</strong> Presencia de ángeles.<br>- <strong>Objetos que se rompen:</strong> Fin de un ciclo. <br><br>Confía en tu intuición al interpretarlas.",
    "meditación": "🧘‍♂️ <strong>Meditación para principiantes:</strong><br><br>1. Siéntate en un lugar tranquilo.<br>2. Enfócate en tu respiración (4-7-8: inhala 4 seg, retén 7, exhala 8).<br>3. Visualiza una luz dorada en tu corazón. <br><br>¡La mente se calmará con práctica!",
    "propósito": "💫 <strong>Tu propósito:</strong><br><br>Responde:<br>- ¿Qué te hace perder la noción del tiempo?<br>- ¿Qué dolor en el mundo te conmueve?<br>- ¿Qué harías si el dinero no importara? <br><br>La respuesta está en esa intersección.",
    "energía": "✨ <strong>Limpieza energética:</strong><br><br>- <strong>Baño con sal marina:</strong> Elimina energías densas.<br>- <strong>Cuarzo negro:</strong> Protección.<br>- <strong>Sonido de cuencos:</strong> Armoniza espacios. <br><br>¡Tu aura brillará como el cosmos!",
    "despedida": "Que las estrellas te guíen, alma aventurera. Recuerda: eres luz y el universo conspira a tu favor. 🌌💛"
};

// Preguntas predeterminadas (botones)
const predefinedQuestions = [
    { text: "¿Qué significan mis sueños?", keyword: "sueños" },
    { text: "¿Cómo reconozco señales del universo?", keyword: "señales" },
    { text: "¿Cómo meditar correctamente?", keyword: "meditación" },
    { text: "¿Cuál es mi propósito espiritual?", keyword: "propósito" },
    { text: "¿Cómo limpiar mi energía?", keyword: "energía" },
    { text: "Gracias, hasta luego.", keyword: "despedida" }
];

// Elementos del DOM
const chatMessages = document.getElementById('chat-messages');
const chatOptions = document.getElementById('chat-options');

// Mostrar saludo inicial y botones
function initChatbot() {
    addBotMessage(cosmicKnowledge.saludo);
    showOptions();
}

// Mostrar botones de opciones
function showOptions() {
    chatOptions.innerHTML = "";
    predefinedQuestions.forEach(question => {
        const button = document.createElement('div');
        button.classList.add('option-button');
        button.textContent = question.text;
        button.addEventListener('click', () => {
            addUserMessage(question.text);
            setTimeout(() => {
                addBotMessage(cosmicKnowledge[question.keyword]);
                showOptions(); // Volver a mostrar opciones después de responder
            }, 800);
        });
        chatOptions.appendChild(button);
    });
}

// Función para añadir mensajes del bot
function addBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.innerHTML = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para añadir mensajes del usuario
function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'user-message');
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Iniciar el chatbot al cargar la página
window.onload = initChatbot;