const logros = [
    { id: "logro_1", texto: "⭐ Desbloqueaste tu primera frase", check: () => diasDesbloqueados() >= 1 },
    { id: "logro_3", texto: "📆 Desbloqueaste frases por 3 días", check: () => diasDesbloqueados() >= 3 },
    { id: "logro_7", texto: "🔥 Racha de 3 días consecutivos", check: () => obtenerRacha() >= 3 },
    { id: "logro_5", texto: "✍️ Escribiste tu primera nota", check: () => localStorage.getItem("nota_") !== null },
    { id: "logro_10", texto: "💰 Acumulaste 100 monedas", check: () => parseInt(localStorage.getItem("monedas") || 0) >= 100 },
    { id: "logro_6", texto: "🔮 Desbloqueaste 1 frase premium", check: () => frasesPremiumDesbloqueadas() >= 1 },
    { id: "logro_9", texto: "🎰 Giraste la ruleta al menos 1 vez", check: () => localStorage.getItem("ruleta_ultima_fecha") !== null },
    { id: "logro_15", texto: "🧠 Reflexionaste 5 días", check: () => contarNotas() >= 5 },
    { id: "logro_20", texto: "🏆 Desbloqueaste 20 frases", check: () => diasDesbloqueados() >= 20 },
    { id: "logro_racha7", texto: "🔥🔥🔥 Racha de 7 días consecutivos", check: () => obtenerRacha() >= 7 }
  ];
  
  const contenedor = document.getElementById("lista-logros");
  
  function mostrarLogros() {
    contenedor.innerHTML = "";
  
    logros.forEach(logro => {
      const completado = logro.check();
      const div = document.createElement("div");
      div.className = `logro-item ${completado ? "completado" : ""}`;
      div.innerHTML = completado ? `✅ ${logro.texto}` : `🔒 ${logro.texto}`;
      contenedor.appendChild(div);
    });
  }
  
  function diasDesbloqueados() {
    return Object.keys(localStorage).filter(k => k.startsWith("nota_frase_")).length;
  }
  
  function frasesPremiumDesbloqueadas() {
    return Object.keys(localStorage).filter(k => k.startsWith("frase_premium_")).length;
  }
  
  function contarNotas() {
    return Object.keys(localStorage).filter(k => k.startsWith("nota_")).length;
  }
  
  function obtenerRacha() {
    const hoy = new Date();
    let racha = 0;
    for (let i = 0; i < 30; i++) {
      const dia = new Date(hoy);
      dia.setDate(hoy.getDate() - i);
      const clave = "nota_frase_" + dia.getDate();
      if (localStorage.getItem(clave)) {
        racha++;
      } else {
        break;
      }
    }
    return racha;
  }
  
  mostrarLogros();
  