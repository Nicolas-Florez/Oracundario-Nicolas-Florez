const logros = [
    // Logros del calendario y frases
    { id: "logro_1", texto: "⭐ Desbloqueaste tu primera frase", check: () => diasDesbloqueados() >= 1 },
    { id: "logro_3", texto: "📆 Desbloqueaste frases por 3 días", check: () => diasDesbloqueados() >= 3 },
    { id: "logro_7", texto: "🔥 Racha de 3 días consecutivos", check: () => obtenerRacha() >= 3 },
    { id: "logro_20", texto: "🏆 Desbloqueaste 20 frases", check: () => diasDesbloqueados() >= 20 },
    { id: "logro_racha7", texto: "🔥🔥🔥 Racha de 7 días consecutivos", check: () => obtenerRacha() >= 7 },
    { id: "logro_racha30", texto: "👑 Racha de 30 días consecutivos", check: () => obtenerRacha() >= 30 },
    
    // Logros de notas y reflexión
    { id: "logro_5", texto: "✍️ Escribiste tu primera nota", check: () => contarNotas() >= 1 },
    { id: "logro_15", texto: "🧠 Reflexionaste 5 días", check: () => contarNotas() >= 5 },
    { id: "logro_notas10", texto: "📝 Escribiste 10 notas", check: () => contarNotas() >= 10 },
    { id: "logro_notas30", texto: "📚 Escribiste 30 notas", check: () => contarNotas() >= 30 },
    
    // Logros de monedas
    { id: "logro_10", texto: "💰 Acumulaste 100 monedas", check: () => parseInt(localStorage.getItem("monedas") || 0) >= 100 },
    { id: "logro_monedas500", texto: "💎 Acumulaste 500 monedas", check: () => parseInt(localStorage.getItem("monedas") || 0) >= 500 },
    { id: "logro_monedas1000", texto: "💎💎 Acumulaste 1000 monedas", check: () => parseInt(localStorage.getItem("monedas") || 0) >= 1000 },
    
    // Logros de ruleta
    { id: "logro_9", texto: "🎰 Giraste la ruleta al menos 1 vez", check: () => localStorage.getItem("ruleta_ultima_fecha") !== null },
    { id: "logro_ruleta5", texto: "🎰🎰 Giraste la ruleta 5 veces", check: () => parseInt(localStorage.getItem("ruleta_veces") || 0) >= 5 },
    { id: "logro_ruleta20", texto: "🎰🎰🎰 Giraste la ruleta 20 veces", check: () => parseInt(localStorage.getItem("ruleta_veces") || 0) >= 20 },
    
    // Logros de frases premium
    { id: "logro_6", texto: "🔮 Desbloqueaste 1 frase premium", check: () => frasesPremiumDesbloqueadas() >= 1 },
    { id: "logro_premium5", texto: "🔮🔮 Desbloqueaste 5 frases premium", check: () => frasesPremiumDesbloqueadas() >= 5 },
    { id: "logro_premium10", texto: "🔮🔮🔮 Desbloqueaste 10 frases premium", check: () => frasesPremiumDesbloqueadas() >= 10 },
    
    // Logros de mascotas
    { id: "logro_mascota1", texto: "🐾 Adoptaste tu primera mascota", check: () => localStorage.getItem("mascota_actual") !== null },
    { id: "logro_mascota5", texto: "🐾🐾 Adoptaste 5 mascotas diferentes", check: () => contarMascotasAdoptadas() >= 5 },
    { id: "logro_mascota10", texto: "🐾🐾🐾 Adoptaste 10 mascotas diferentes", check: () => contarMascotasAdoptadas() >= 10 },
    { id: "logro_alimentar", texto: "🍎 Alimentaste a tu mascota por primera vez", check: () => localStorage.getItem("mascota_alimentada") !== null },
    { id: "logro_jugar", texto: "🎾 Jugaste con tu mascota por primera vez", check: () => localStorage.getItem("mascota_jugada") !== null },
    { id: "logro_limpiar", texto: "🛁 Limpiaste a tu mascota por primera vez", check: () => localStorage.getItem("mascota_limpia") !== null },
    { id: "logro_cuidar", texto: "❤️ Cuidaste a tu mascota 10 veces", check: () => parseInt(localStorage.getItem("mascota_cuidados") || 0) >= 10 },
    { id: "logro_mascota_feliz", texto: "😊 Tu mascota alcanzó felicidad máxima", check: () => parseInt(localStorage.getItem("mascota_felicidad") || 0) >= 100 },
    
    // Logros de acrósticos
    { id: "logro_acrostico1", texto: "📝 Creaste tu primer acróstico", check: () => contarAcrosticos() >= 1 },
    { id: "logro_acrostico5", texto: "📝📝 Creaste 5 acrósticos", check: () => contarAcrosticos() >= 5 },
    { id: "logro_acrostico10", texto: "📝📝📝 Creaste 10 acrósticos", check: () => contarAcrosticos() >= 10 },
    { id: "logro_acrostico_temas", texto: "🎨 Usaste 3 temas diferentes en acrósticos", check: () => contarTemasAcrosticos() >= 3 },
    { id: "logro_acrostico_largo", texto: "📖 Creaste un acróstico con 10+ letras", check: () => acrosticoMasLargo() >= 10 },
    
    // Logros de chatbot
    { id: "logro_chat1", texto: "💬 Enviaste tu primer mensaje al chatbot", check: () => localStorage.getItem("chatbot_mensajes") !== null },
    { id: "logro_chat10", texto: "💬💬 Enviaste 10 mensajes al chatbot", check: () => parseInt(localStorage.getItem("chatbot_mensajes") || 0) >= 10 },
    { id: "logro_chat50", texto: "💬💬💬 Enviaste 50 mensajes al chatbot", check: () => parseInt(localStorage.getItem("chatbot_mensajes") || 0) >= 50 },
    
    // Logros de colores zodiacales
    { id: "logro_colores1", texto: "🎨 Cambiaste de colores por primera vez", check: () => localStorage.getItem("colores_zodiacales") !== null },
    { id: "logro_colores5", texto: "🎨🎨 Cambiaste de colores 5 veces", check: () => parseInt(localStorage.getItem("cambios_colores") || 0) >= 5 },
    { id: "logro_colores_todos", texto: "🌈 Probaste todos los colores zodiacales", check: () => contarColoresUsados() >= 12 },
    
    // Logros de exploración
    { id: "logro_explorador", texto: "🗺️ Visitaste todas las secciones de la página", check: () => visitarTodasSecciones() },
    { id: "logro_diario", texto: "📔 Usaste el diario por primera vez", check: () => localStorage.getItem("diario_usado") !== null },
    { id: "logro_calendario", texto: "📅 Usaste el calendario por primera vez", check: () => diasDesbloqueados() >= 1 },
    { id: "logro_nombre", texto: "📝 Usaste el generador de acrósticos por primera vez", check: () => contarAcrosticos() >= 1 },
    { id: "logro_logros", texto: "🏆 Visitaste la sección de logros", check: () => localStorage.getItem("logros_visitado") !== null },
    
    // Logros especiales
    { id: "logro_completista", texto: "👑 Completaste todos los logros básicos", check: () => logrosCompletados() >= 20 },
    { id: "logro_experto", texto: "🎯 Eres un experto en la aplicación", check: () => logrosCompletados() >= 30 },
    { id: "logro_maestro", texto: "🌟 Eres un maestro de la aplicación", check: () => logrosCompletados() >= 40 }
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
    
    // Aplicar colores zodiacales a los logros después de crearlos
    if (window.ZodiacColors && window.ZodiacColors.aplicarColoresADinamicos) {
      setTimeout(() => {
        window.ZodiacColors.aplicarColoresADinamicos();
      }, 100);
    }
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
  
  // Funciones auxiliares para los nuevos logros
  function contarMascotasAdoptadas() {
    const mascotas = JSON.parse(localStorage.getItem("mascotas_adoptadas") || "[]");
    return mascotas.length;
  }
  
  function contarAcrosticos() {
    const acrosticos = JSON.parse(localStorage.getItem("acrosticosGuardados") || "[]");
    return acrosticos.length;
  }
  
  function contarTemasAcrosticos() {
    const acrosticos = JSON.parse(localStorage.getItem("acrosticosGuardados") || "[]");
    const temas = new Set(acrosticos.map(a => a.tema));
    return temas.size;
  }
  
  function acrosticoMasLargo() {
    const acrosticos = JSON.parse(localStorage.getItem("acrosticosGuardados") || "[]");
    if (acrosticos.length === 0) return 0;
    return Math.max(...acrosticos.map(a => a.palabra.length));
  }
  
  function contarColoresUsados() {
    const colores = JSON.parse(localStorage.getItem("colores_usados") || "[]");
    return colores.length;
  }
  
  function visitarTodasSecciones() {
    const secciones = [
      localStorage.getItem("diario_visitado"),
      localStorage.getItem("calendario_visitado"),
      localStorage.getItem("nombre_visitado"),
      localStorage.getItem("mascota_visitado"),
      localStorage.getItem("ruleta_visitado"),
      localStorage.getItem("logros_visitado")
    ];
    return secciones.every(seccion => seccion !== null);
  }
  
  function logrosCompletados() {
    return logros.filter(logro => logro.check()).length;
  }
  
  mostrarLogros();
  
  // Aplicar colores zodiacales después de cargar los logros
  setTimeout(() => {
    if (window.ZodiacColors && window.ZodiacColors.aplicarColoresGuardados) {
      window.ZodiacColors.aplicarColoresGuardados();
    }
  }, 200);
  
  // Marcar que se visitó la sección de logros
  localStorage.setItem("logros_visitado", "true");
  