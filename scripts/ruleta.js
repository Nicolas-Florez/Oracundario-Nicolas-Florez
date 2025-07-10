const btnGirar = document.getElementById("girar-ruleta");
const resultado = document.getElementById("resultado");
const monedasElemento = document.getElementById("monedas");

const premios = [
  { tipo: "monedas", valor: 5 },
  { tipo: "monedas", valor: 10 },
  { tipo: "monedas", valor: 15 },
  { tipo: "frase", valor: 1 }, // desbloquea 1 frase premium
  { tipo: "monedas", valor: 20 },
  { tipo: "monedas", valor: 0 }, // sin premio
  { tipo: "frase", valor: 1 }
];

function obtenerMonedas() {
  return parseInt(localStorage.getItem("monedas") || "0");
}

function agregarMonedas(cantidad) {
  const total = obtenerMonedas() + cantidad;
  localStorage.setItem("monedas", total);
  actualizarMonedasUI();
}

function actualizarMonedasUI() {
  monedasElemento.textContent = `💰 Monedas: ${obtenerMonedas()}`;
}

function puedeGirarHoy() {
  const ultimaFecha = localStorage.getItem("ruleta_ultima_fecha");
  const hoy = new Date().toISOString().slice(0, 10);
  return ultimaFecha !== hoy;
}

function registrarGiro() {
  const hoy = new Date().toISOString().slice(0, 10);
  localStorage.setItem("ruleta_ultima_fecha", hoy);
}

const ruleta = document.getElementById("ruleta");
let girando = false;

btnGirar.addEventListener("click", () => {
  if (girando) return;
  if (!puedeGirarHoy()) {
    resultado.textContent = "⚠️ Ya giraste la ruleta hoy. Vuelve mañana.";
    return;
  }

  girando = true;
  const grados = 360 * 5 + Math.floor(Math.random() * 360); // 5 vueltas + aleatorio
  ruleta.style.transition = "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
  ruleta.style.transform = `rotate(${grados}deg)`;

  setTimeout(() => {
    const anguloFinal = grados % 360;
    const indice = Math.floor((anguloFinal + 25.7) / 51.4) % premios.length;
    const premio = premios[indice];

    if (premio.tipo === "monedas") {
      agregarMonedas(premio.valor);
      resultado.textContent = premio.valor > 0
        ? `🎉 ¡Ganaste ${premio.valor} monedas!`
        : "😢 Esta vez no ganaste nada.";
    } else {
      desbloquearFrasePremiumAleatoria();
      resultado.textContent = "🎁 ¡Desbloqueaste una frase premium!";
    }

    registrarGiro();
    girando = false;
  }, 4200);
});


function desbloquearFrasePremiumAleatoria() {
  const posibles = [1, 2, 3, 4, 5].filter(id => !localStorage.getItem("frase_premium_" + id));
  if (posibles.length > 0) {
    const id = posibles[Math.floor(Math.random() * posibles.length)];
    localStorage.setItem("frase_premium_" + id, "comprada");
  }
}

actualizarMonedasUI();
