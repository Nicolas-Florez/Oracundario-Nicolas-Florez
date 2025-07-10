const frasesPremium = [
    { id: 1, texto: "Brilla incluso en la oscuridad.", costo: 10 },
    { id: 2, texto: "Lo que hoy parece un sacrificio, mañana será tu logro.", costo: 15 },
    { id: 3, texto: "Los sueños no tienen fecha de vencimiento.", costo: 12 },
    { id: 4, texto: "Cada paso cuenta, incluso los pequeños.", costo: 8 },
    { id: 5, texto: "Confía. Estás más cerca de lo que crees.", costo: 20 }
  ];
  
  const lista = document.getElementById("lista-frases");
  const monedasElemento = document.getElementById("monedas");
  
  function obtenerMonedas() {
    return parseInt(localStorage.getItem("monedas") || "0");
  }
  
  function actualizarMonedasUI() {
    monedasElemento.textContent = `💰 Monedas: ${obtenerMonedas()}`;
  }
  
  function gastarMonedas(cantidad) {
    const actuales = obtenerMonedas();
    if (actuales >= cantidad) {
      localStorage.setItem("monedas", actuales - cantidad);
      actualizarMonedasUI();
      return true;
    }
    return false;
  }
  
  function cargarTienda() {
    lista.innerHTML = "";
  
    frasesPremium.forEach(frase => {
      const comprada = localStorage.getItem("frase_premium_" + frase.id);
  
      const div = document.createElement("div");
      div.classList.add("frase-item");
  
      if (comprada) {
        div.innerHTML = `<p>✅ ${frase.texto}</p>`;
      } else {
        div.innerHTML = `
          <p>🔒 Frase misteriosa...</p>
          <button class="boton comprar" data-id="${frase.id}" data-costo="${frase.costo}">
            Comprar por ${frase.costo} monedas
          </button>
        `;
      }
      
  
      lista.appendChild(div);
    });
  
    activarBotones();
  }
  
  function activarBotones() {
    document.querySelectorAll(".comprar").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const costo = parseInt(btn.dataset.costo);
  
        if (gastarMonedas(costo)) {
          localStorage.setItem("frase_premium_" + id, "comprada");
          alert("✅ Frase desbloqueada con éxito.");
          cargarTienda();
        } else {
          alert("⚠️ No tienes suficientes monedas.");
        }
      });
    });
  }
  
  actualizarMonedasUI();
  cargarTienda();
  