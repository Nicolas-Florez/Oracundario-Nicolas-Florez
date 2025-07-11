// Elementos del DOM
const btnGirar = document.getElementById("girar-ruleta");
const resultado = document.getElementById("resultado");
const monedasElemento = document.getElementById("monedas");
const girosElemento = document.getElementById("giros-disponibles");
const ruleta = document.getElementById("ruleta");
const ruletaContainer = document.querySelector(".ruleta-container");
const particulasContainer = document.getElementById("particulas-container");

// Configuración de premios mejorada
const premios = [
  { tipo: "monedas", valor: 10, mensaje: "¡Ganaste 10 monedas místicas!" },
  { tipo: "monedas", valor: 25, mensaje: "¡Excelente! 25 monedas para ti!" },
  { tipo: "frase", valor: 1, mensaje: "¡Desbloqueaste una frase premium!" },
  { tipo: "monedas", valor: 50, mensaje: "¡Increíble! 50 monedas de oro!" },
  { tipo: "multiplicador", valor: 2, mensaje: "¡Multiplicador x2 activado!" },
  { tipo: "monedas", valor: 15, mensaje: "¡Ganaste 15 monedas brillantes!" },
  { tipo: "bonus", valor: 1, mensaje: "¡Bonus especial desbloqueado!" },
  { tipo: "monedas", valor: 35, mensaje: "¡Fantástico! 35 monedas mágicas!" }
];

// Variables de estado
let girando = false;
let multiplicadorActivo = false;
let sonidosActivos = true;

// Funciones de LocalStorage
function obtenerMonedas() {
  return parseInt(localStorage.getItem("monedas") || "0");
}

function agregarMonedas(cantidad) {
  if (multiplicadorActivo) {
    cantidad *= 2;
    multiplicadorActivo = false;
    localStorage.setItem("multiplicador_activo", "false");
  }
  const total = obtenerMonedas() + cantidad;
  localStorage.setItem("monedas", total);
  actualizarUI();
}

function obtenerGirosDisponibles() {
  const ultimaFecha = localStorage.getItem("ruleta_ultima_fecha");
  const hoy = new Date().toISOString().slice(0, 10);
  
  if (ultimaFecha !== hoy) {
    return 3; // 3 giros por día
  }
  
  return parseInt(localStorage.getItem("giros_restantes") || "0");
}

function usarGiro() {
  const girosRestantes = obtenerGirosDisponibles() - 1;
  localStorage.setItem("giros_restantes", girosRestantes);
  
  if (girosRestantes === 2) {
    const hoy = new Date().toISOString().slice(0, 10);
    localStorage.setItem("ruleta_ultima_fecha", hoy);
  }
  
  actualizarUI();
}

function actualizarUI() {
  monedasElemento.textContent = `💰 Monedas: ${obtenerMonedas()}`;
  girosElemento.textContent = `🎲 Giros disponibles: ${obtenerGirosDisponibles()}`;
  
  // Actualizar estado del botón
  const girosDisponibles = obtenerGirosDisponibles();
  btnGirar.disabled = girosDisponibles === 0 || girando;
  
  if (girosDisponibles === 0) {
    btnGirar.innerHTML = '<i class="fas fa-clock"></i><span>Vuelve mañana</span>';
  } else {
    btnGirar.innerHTML = '<i class="fas fa-play"></i><span>Girar Ruleta</span>';
  }
  
  // Verificar multiplicador activo
  multiplicadorActivo = localStorage.getItem("multiplicador_activo") === "true";
  if (multiplicadorActivo) {
    monedasElemento.textContent += " ✨x2";
  }
}

// Función para crear partículas de celebración
function crearParticulas() {
  for (let i = 0; i < 30; i++) {
    const particula = document.createElement("div");
    particula.className = "particula";
    particula.style.left = Math.random() * 100 + "%";
    particula.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    particula.style.animationDelay = Math.random() * 2 + "s";
    particulasContainer.appendChild(particula);
    
    setTimeout(() => {
      particula.remove();
    }, 3000);
  }
}

// Función para reproducir sonidos
function reproducirSonido(tipo) {
  if (!sonidosActivos) return;
  
  // Crear contexto de audio
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  switch (tipo) {
    case 'spin':
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
      break;
      
    case 'win':
      for (let i = 0; i < 3; i++) {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.frequency.setValueAtTime(440 + i * 110, audioContext.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.1, audioContext.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.2);
        
        osc.start(audioContext.currentTime + i * 0.1);
        osc.stop(audioContext.currentTime + i * 0.1 + 0.2);
      }
      break;
      
    case 'lose':
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.5);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.5);
      break;
  }
}

// Función para manejar diferentes tipos de premios
function procesarPremio(premio) {
  switch (premio.tipo) {
    case "monedas":
      agregarMonedas(premio.valor);
      if (premio.valor > 0) {
        reproducirSonido('win');
        crearParticulas();
        resultado.className = "resultado premio";
      } else {
        reproducirSonido('lose');
        resultado.className = "resultado sin-premio";
      }
      break;
      
    case "frase":
      desbloquearFrasePremiumAleatoria();
      reproducirSonido('win');
      crearParticulas();
      resultado.className = "resultado premio";
      break;
      
    case "multiplicador":
      multiplicadorActivo = true;
      localStorage.setItem("multiplicador_activo", "true");
      reproducirSonido('win');
      crearParticulas();
      resultado.className = "resultado premio";
      break;
      
    case "bonus":
      // Bonus especial: giro extra
      const girosActuales = obtenerGirosDisponibles();
      localStorage.setItem("giros_restantes", girosActuales + 1);
      reproducirSonido('win');
      crearParticulas();
      resultado.className = "resultado premio";
      break;
  }
}

// Función para desbloquear frases premium
function desbloquearFrasePremiumAleatoria() {
  const posibles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(id => 
    !localStorage.getItem("frase_premium_" + id)
  );
  
  if (posibles.length > 0) {
    const id = posibles[Math.floor(Math.random() * posibles.length)];
    localStorage.setItem("frase_premium_" + id, "comprada");
    
    // Registrar logro
    const frasesDesbloqueadas = parseInt(localStorage.getItem("frases_desbloqueadas") || "0") + 1;
    localStorage.setItem("frases_desbloqueadas", frasesDesbloqueadas);
  }
}

// Función principal para girar la ruleta
function girarRuleta() {
  if (girando || obtenerGirosDisponibles() === 0) return;
  
  girando = true;
  usarGiro();
  
  // Efectos visuales durante el giro
  ruletaContainer.classList.add("spinning");
  btnGirar.disabled = true;
  resultado.textContent = "🌟 La ruleta está girando...";
  resultado.className = "resultado";
  
  reproducirSonido('spin');
  
  // Calcular rotación
  const vueltasBase = 5; // Mínimo 5 vueltas completas
  const vueltasExtra = Math.random() * 3; // 0-3 vueltas adicionales
  const anguloFinal = Math.random() * 360; // Ángulo final aleatorio
  const rotacionTotal = (vueltasBase + vueltasExtra) * 360 + anguloFinal;
  
  // Aplicar rotación
  ruleta.style.setProperty('--spin-degrees', rotacionTotal + 'deg');
  ruleta.classList.add('spinning');
  
  // Calcular resultado después de la animación
  setTimeout(() => {
    // Calcular qué sección ganó
    const anguloNormalizado = (360 - (rotacionTotal % 360)) % 360;
    const seccionGanadora = Math.floor((anguloNormalizado + 22.5) / 45) % 8;
    const premio = premios[seccionGanadora];
    
    // Procesar el premio
    procesarPremio(premio);
    resultado.textContent = premio.mensaje;
    
    // Registrar estadísticas
    const girosRealizados = parseInt(localStorage.getItem("giros_realizados") || "0") + 1;
    localStorage.setItem("giros_realizados", girosRealizados);
    
    // Limpiar efectos
    ruletaContainer.classList.remove("spinning");
    ruleta.classList.remove('spinning');
    girando = false;
    actualizarUI();
    
  }, 4200); // Duración de la animación
}

// Event listeners
btnGirar.addEventListener("click", girarRuleta);

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  actualizarUI();
  
  // Verificar si hay multiplicador activo del día anterior
  const ultimaFecha = localStorage.getItem("ruleta_ultima_fecha");
  const hoy = new Date().toISOString().slice(0, 10);
  
  if (ultimaFecha !== hoy) {
    localStorage.setItem("multiplicador_activo", "false");
    localStorage.setItem("giros_restantes", "3");
  }
});

// Función para alternar sonidos
function toggleSonidos() {
  sonidosActivos = !sonidosActivos;
  localStorage.setItem("sonidos_activos", sonidosActivos);
}

// Cargar preferencia de sonidos
sonidosActivos = localStorage.getItem("sonidos_activos") !== "false";
