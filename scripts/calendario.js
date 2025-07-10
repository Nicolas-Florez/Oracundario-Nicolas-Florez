const frases = [
  "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
  "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
  "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
  "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
  "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
  "¿Qué es el dinero para mí... y de quién aprendí eso?",
  "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
  "¿Qué me impide reconocer que ya soy una energía de riqueza?",
  "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
  "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
  "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
  "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
  "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
  "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
  "¿Qué pasaría si dejara de rechazar ser rica?",
  "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
  "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
  "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
  "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
  "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
  "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
  "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
  "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
  "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
  "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
  "¿Qué me impide ser el imán que realmente soy para el dinero?",
  "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
  "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
  "¿Qué riqueza energética está disponible para mí ahora mismo?",
  "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?"
];


// Referencias DOM
const grid = document.getElementById("grid-calendario");
const modal = document.getElementById("modal-frase");
const textoFrase = document.getElementById("texto-frase");
const cerrarModalBtn = document.getElementById("cerrar-modal");
const contador = document.getElementById("contador-frase");
const mesActualElemento = document.getElementById("mes-actual");
const monedasElemento = document.getElementById("monedas");

// Funciones de monedas
function obtenerMonedas() {
  return parseInt(localStorage.getItem("monedas") || "0");
}

function actualizarMonedasUI() {
  monedasElemento.textContent = `💰 Monedas: ${obtenerMonedas()}`;
}

function agregarMonedas(cantidad) {
  const total = obtenerMonedas() + cantidad;
  localStorage.setItem("monedas", total);
  actualizarMonedasUI();
}

const diasMes = 30;

const mesesNombre = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const hoy = new Date();
const mesActual = mesesNombre[hoy.getMonth()];
const añoActual = hoy.getFullYear();
const diaHoy = hoy.getDate();
const primerDiaSemana = new Date(añoActual, hoy.getMonth(), 1).getDay();

mesActualElemento.textContent = `${mesActual} ${añoActual}`;

// Alinear calendario
for (let i = 0; i < primerDiaSemana; i++) {
  const diaVacio = document.createElement("div");
  diaVacio.classList.add("dia", "dia-vacio");
  grid.appendChild(diaVacio);
}

// Generar días
for (let i = 1; i <= diasMes; i++) {
  const dia = document.createElement("div");
  dia.classList.add("dia");
  dia.textContent = i;
  dia.dataset.dia = i;

  const clave = "nota_frase_" + i;
  const fraseGuardada = localStorage.getItem(clave);

  if (i > diaHoy) {
    dia.classList.add("bloqueado");
  } else {
    dia.classList.add("desbloqueado");
    dia.style.cursor = "pointer";
  }

  if (fraseGuardada) {
    dia.classList.add("visto");
  }

  if (!dia.classList.contains("bloqueado")) {
    dia.addEventListener("click", () => {
      const numDia = parseInt(dia.dataset.dia);
      const frase = frases[(numDia - 1) % frases.length];
      textoFrase.textContent = frase;

      const yaVista = localStorage.getItem(clave);
      if (!yaVista) {
        agregarMonedas(5); // 👉 Ganar monedas solo la primera vez
      }

      localStorage.setItem(clave, frase);

      modal.classList.remove("oculto");
      modal.classList.add("fade-in");
      cerrarModalBtn.focus();
      dia.classList.add("visto");
    });
  }

  grid.appendChild(dia);
}

// Modal
function cerrarModal() {
  modal.classList.add("fade-out");
  modal.classList.remove("fade-in");

  setTimeout(() => {
    modal.classList.add("oculto");
    modal.classList.remove("fade-out");
  }, 300);
}

cerrarModalBtn.addEventListener("click", cerrarModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    cerrarModal();
  }
});

const modalContenido = modal.querySelector(".modal-contenido");
modalContenido.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("oculto")) {
    cerrarModal();
  }
});

// Contador de próxima frase (6 PM)
function actualizarContador() {
  const ahora = new Date();
  const proxima = new Date();
  proxima.setHours(18, 0, 0, 0);

  if (ahora > proxima) {
    proxima.setDate(proxima.getDate() + 1);
  }

  const diff = proxima - ahora;
  const horas = Math.floor(diff / 1000 / 60 / 60);
  const minutos = Math.floor((diff / 1000 / 60) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contador.textContent = `⏳ Próxima frase disponible en: ${horas}h ${minutos}m ${segundos}s`;
}

// Inicializaciones
actualizarContador();
actualizarMonedasUI();
setInterval(actualizarContador, 1000);
