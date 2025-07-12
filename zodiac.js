// Configuración de signos zodiacales
const SIGNOS_ZODIACALES = {
    aries: {
      nombre: "Aries",
      simbolo: "♈",
      fechaInicio: [3, 21],
      fechaFin: [4, 19],
      elemento: "Fuego",
      colores: {
        primary: "#ff4757",
        secondary: "#ff4757cc",
        shadow: "#ff4757cc",
        light: "#ff6b7add",
        text: "#ffe6e6",
        border: "#ff4757bb"
      }
    },
    tauro: {
      nombre: "Tauro",
      simbolo: "♉",
      fechaInicio: [4, 20],
      fechaFin: [5, 20],
      elemento: "Tierra",
      colores: {
        primary: "#2ed573",
        secondary: "#2ed573cc",
        shadow: "#2ed573cc",
        light: "#5edadd",
        text: "#e6ffe6",
        border: "#2ed573bb"
      }
    },
    geminis: {
      nombre: "Géminis",
      simbolo: "♊",
      fechaInicio: [5, 21],
      fechaFin: [6, 20],
      elemento: "Aire",
      colores: {
        primary: "#ffa502",
        secondary: "#ffa502cc",
        shadow: "#ffa502cc",
        light: "#ffb732dd",
        text: "#fff7e6",
        border: "#ffa502bb"
      }
    },
    cancer: {
      nombre: "Cáncer",
      simbolo: "♋",
      fechaInicio: [6, 21],
      fechaFin: [7, 22],
      elemento: "Agua",
      colores: {
        primary: "#3742fa",
        secondary: "#3742facc",
        shadow: "#3742facc",
        light: "#5f69ffdd",
        text: "#e6e8ff",
        border: "#3742fabb"
      }
    },
    leo: {
      nombre: "Leo",
      simbolo: "♌",
      fechaInicio: [7, 23],
      fechaFin: [8, 22],
      elemento: "Fuego",
      colores: {
        primary: "#ff6348",
        secondary: "#ff6348cc",
        shadow: "#ff6348cc",
        light: "#ff8170dd",
        text: "#ffe6e6",
        border: "#ff6348bb"
      }
    },
    virgo: {
      nombre: "Virgo",
      simbolo: "♍",
      fechaInicio: [8, 23],
      fechaFin: [9, 22],
      elemento: "Tierra",
      colores: {
        primary: "#7bed9f",
        secondary: "#7bed9fcc",
        shadow: "#7bed9fcc",
        light: "#9ff2b5dd",
        text: "#e6ffe6",
        border: "#7bed9fbb"
      }
    },
    libra: {
      nombre: "Libra",
      simbolo: "♎",
      fechaInicio: [9, 23],
      fechaFin: [10, 22],
      elemento: "Aire",
      colores: {
        primary: "#ff9ff3",
        secondary: "#ff9ff3cc",
        shadow: "#ff9ff3cc",
        light: "#ffb3f5dd",
        text: "#ffe6fe",
        border: "#ff9ff3bb"
      }
    },
    escorpio: {
      nombre: "Escorpio",
      simbolo: "♏",
      fechaInicio: [10, 23],
      fechaFin: [11, 21],
      elemento: "Agua",
      colores: {
        primary: "#8b3d99",
        secondary: "#8b3d99cc",
        shadow: "#8b3d99cc",
        light: "#a558b0dd",
        text: "#f2e6f5",
        border: "#8b3d99bb"
      }
    },
    sagitario: {
      nombre: "Sagitario",
      simbolo: "♐",
      fechaInicio: [11, 22],
      fechaFin: [12, 21],
      elemento: "Fuego",
      colores: {
        primary: "#ff6b35",
        secondary: "#ff6b35cc",
        shadow: "#ff6b35cc",
        light: "#ff8757dd",
        text: "#ffe6e6",
        border: "#ff6b35bb"
      }
    },
    capricornio: {
      nombre: "Capricornio",
      simbolo: "♑",
      fechaInicio: [12, 22],
      fechaFin: [1, 19],
      elemento: "Tierra",
      colores: {
        primary: "#2c2c54",
        secondary: "#2c2c54cc",
        shadow: "#2c2c54cc",
        light: "#4d4d7add",
        text: "#e6e6f0",
        border: "#2c2c54bb"
      }
    },
    acuario: {
      nombre: "Acuario",
      simbolo: "♒",
      fechaInicio: [1, 20],
      fechaFin: [2, 18],
      elemento: "Aire",
      colores: {
        primary: "#1e90ff",
        secondary: "#1e90ffcc",
        shadow: "#1e90ffcc",
        light: "#4da6ffdd",
        text: "#e6f3ff",
        border: "#1e90ffbb"
      }
    },
    piscis: {
      nombre: "Piscis",
      simbolo: "♓",
      fechaInicio: [2, 19],
      fechaFin: [3, 20],
      elemento: "Agua",
      colores: {
        primary: "#5f27cd",
        secondary: "#5f27cdcc",
        shadow: "#5f27cdcc",
        light: "#7c4ddbdd",
        text: "#ede6f7",
        border: "#5f27cdbb"
      }
    }
  };
  
  // Variables globales
  let signoActual = null;
  let coloresActuales = null;
  
  // Inicialización
  document.addEventListener('DOMContentLoaded', function() {
    initializeZodiac();
    loadSavedZodiac();
  });
  
  function initializeZodiac() {
    const botonZodiaco = document.getElementById('boton-zodiaco');
    const modal = document.getElementById('modal-zodiaco');
    const cerrarModal = document.getElementById('cerrar-modal');
    const calcularSigno = document.getElementById('calcular-signo');
    const aplicarColores = document.getElementById('aplicar-colores');
  
    // Eventos
    botonZodiaco.addEventListener('click', () => {
      modal.classList.add('active');
    });
  
    cerrarModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  
    calcularSigno.addEventListener('click', calcularSignoZodiacal);
    aplicarColores.addEventListener('click', aplicarColoresZodiacales);
  
    // Tecla ESC para cerrar modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    });
  }
  
  function calcularSignoZodiacal() {
    const fechaInput = document.getElementById('fecha-nacimiento');
    const fechaNacimiento = fechaInput.value;
  
    if (!fechaNacimiento) {
      alert('Por favor, selecciona tu fecha de nacimiento');
      return;
    }
  
    const fecha = new Date(fechaNacimiento);
    const mes = fecha.getMonth() + 1; // getMonth() devuelve 0-11
    const dia = fecha.getDate();
  
    const signo = determinarSigno(mes, dia);
    
    if (signo) {
      mostrarResultadoZodiaco(signo);
      signoActual = signo;
      coloresActuales = SIGNOS_ZODIACALES[signo].colores;
    } else {
      alert('Error al calcular el signo zodiacal');
    }
  }
  
  function determinarSigno(mes, dia) {
    for (const [signo, datos] of Object.entries(SIGNOS_ZODIACALES)) {
      const [inicioMes, inicioDia] = datos.fechaInicio;
      const [finMes, finDia] = datos.fechaFin;
  
      // Caso especial para Capricornio (cruza el año)
      if (signo === 'capricornio') {
        if ((mes === 12 && dia >= inicioDia) || (mes === 1 && dia <= finDia)) {
          return signo;
        }
      } else {
        // Casos normales
        if ((mes === inicioMes && dia >= inicioDia) || (mes === finMes && dia <= finDia)) {
          return signo;
        }
      }
    }
    return null;
  }
  
  function mostrarResultadoZodiaco(signo) {
    const datos = SIGNOS_ZODIACALES[signo];
    const resultadoDiv = document.getElementById('resultado-zodiaco');
    
    // Actualizar la información del signo
    const signoIcon = resultadoDiv.querySelector('.signo-icon');
    const signoNombre = resultadoDiv.querySelector('.signo-nombre');
    const signoFechas = resultadoDiv.querySelector('.signo-fechas');
    const signoElemento = resultadoDiv.querySelector('.signo-elemento');
    const coloresPreview = resultadoDiv.querySelector('.colores-preview');
  
    signoIcon.textContent = datos.simbolo;
    signoNombre.textContent = datos.nombre;
    signoFechas.textContent = `${formatearFecha(datos.fechaInicio)} - ${formatearFecha(datos.fechaFin)}`;
    signoElemento.textContent = `Elemento: ${datos.elemento}`;
  
    // Crear preview de colores
    coloresPreview.innerHTML = '';
    const coloresArray = [
      datos.colores.primary,
      datos.colores.secondary,
      datos.colores.light,
      datos.colores.shadow
    ];
  
    coloresArray.forEach((color, index) => {
      const colorSwatch = document.createElement('div');
      colorSwatch.className = 'color-swatch';
      colorSwatch.style.background = color;
      colorSwatch.title = `Color ${index + 1}`;
      coloresPreview.appendChild(colorSwatch);
    });
  
    // Mostrar el resultado
    resultadoDiv.style.display = 'block';
  
    // Actualizar el botón flotante
    actualizarBotonZodiaco(datos);
  }
  
  function formatearFecha(fecha) {
    const [mes, dia] = fecha;
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return `${dia} de ${meses[mes - 1]}`;
  }
  
  function actualizarBotonZodiaco(datos) {
    const botonZodiaco = document.getElementById('boton-zodiaco');
    const zodiacIcon = botonZodiaco.querySelector('.zodiac-icon');
    const zodiacText = botonZodiaco.querySelector('.zodiac-text');
  
    zodiacIcon.textContent = datos.simbolo;
    zodiacText.textContent = datos.nombre;
  
    // Aplicar colores al botón
    botonZodiaco.style.background = `linear-gradient(45deg, ${datos.colores.primary}, #4b0082)`;
    botonZodiaco.style.boxShadow = `0 4px 20px ${datos.colores.shadow}`;
  }
  
  function aplicarColoresZodiacales() {
    if (!coloresActuales) {
      alert('Primero calcula tu signo zodiacal');
      return;
    }
  
    // Aplicar colores usando CSS variables
    const root = document.documentElement;
    
    root.style.setProperty('--zodiac-primary', coloresActuales.primary);
    root.style.setProperty('--zodiac-secondary', coloresActuales.secondary);
    root.style.setProperty('--zodiac-shadow', coloresActuales.shadow);
    root.style.setProperty('--zodiac-light', coloresActuales.light);
    root.style.setProperty('--zodiac-text', coloresActuales.text);
    root.style.setProperty('--zodiac-border', coloresActuales.border);
  
    // Aplicar colores a elementos específicos de la ruleta
    aplicarColoresARuleta();
    
    // Aplicar colores a otros elementos de la página
    aplicarColoresAElementos();
  
    // Guardar en localStorage
    localStorage.setItem('zodiac-sign', signoActual);
    localStorage.setItem('zodiac-colors', JSON.stringify(coloresActuales));
  
    // Mostrar confirmación
    mostrarConfirmacion('¡Colores aplicados exitosamente! 🎨✨');
  
    // Cerrar modal
    document.getElementById('modal-zodiaco').classList.remove('active');
  
    // Efecto visual de aplicación
    document.body.style.transition = 'all 0.5s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 500);
  }
  
  function loadSavedZodiac() {
    const savedSign = localStorage.getItem('zodiac-sign');
    const savedColors = localStorage.getItem('zodiac-colors');
  
    if (savedSign && savedColors) {
      signoActual = savedSign;
      coloresActuales = JSON.parse(savedColors);
      
      // Aplicar colores guardados
      const root = document.documentElement;
      root.style.setProperty('--zodiac-primary', coloresActuales.primary);
      root.style.setProperty('--zodiac-secondary', coloresActuales.secondary);
      root.style.setProperty('--zodiac-shadow', coloresActuales.shadow);
      root.style.setProperty('--zodiac-light', coloresActuales.light);
      root.style.setProperty('--zodiac-text', coloresActuales.text);
      root.style.setProperty('--zodiac-border', coloresActuales.border);
  
      // Aplicar colores a elementos específicos
      setTimeout(() => {
        aplicarColoresARuleta();
        aplicarColoresAElementos();
      }, 100);
  
      // Actualizar botón flotante
      const datos = SIGNOS_ZODIACALES[savedSign];
      actualizarBotonZodiaco(datos);
    }
  }
  
  function mostrarConfirmacion(mensaje) {
    // Crear elemento de confirmación
    const confirmacion = document.createElement('div');
    confirmacion.className = 'confirmacion-zodiac';
    confirmacion.textContent = mensaje;
    confirmacion.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(45deg, var(--zodiac-primary), #4b0082);
      color: white;
      padding: 20px 30px;
      border-radius: 15px;
      font-weight: bold;
      z-index: 3000;
      box-shadow: 0 10px 30px var(--zodiac-shadow);
      animation: confirmacion-fade 3s ease-out forwards;
    `;
  
    // Agregar CSS de animación
    const style = document.createElement('style');
    style.textContent = `
      @keyframes confirmacion-fade {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
      }
    `;
    document.head.appendChild(style);
  
    // Agregar al DOM
    document.body.appendChild(confirmacion);
  
    // Remover después de la animación
    setTimeout(() => {
      if (confirmacion.parentNode) {
        confirmacion.parentNode.removeChild(confirmacion);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }, 3000);
  }
  
  // Funciones auxiliares para aplicar colores en otras páginas
  function applyZodiacColorsToPage() {
    const savedSign = localStorage.getItem('zodiac-sign');
    const savedColors = localStorage.getItem('zodiac-colors');
  
    if (savedSign && savedColors) {
      const colors = JSON.parse(savedColors);
      const root = document.documentElement;
      
      root.style.setProperty('--zodiac-primary', colors.primary);
      root.style.setProperty('--zodiac-secondary', colors.secondary);
      root.style.setProperty('--zodiac-shadow', colors.shadow);
      root.style.setProperty('--zodiac-light', colors.light);
      root.style.setProperty('--zodiac-text', colors.text);
      root.style.setProperty('--zodiac-border', colors.border);
    }
  }
  
  // Aplicar colores al cargar cualquier página
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyZodiacColorsToPage);
  } else {
    applyZodiacColorsToPage();
  }
  
  // Funciones para aplicar colores a elementos específicos
  function aplicarColoresARuleta() {
    // Aplicar colores a la ruleta
    const ruleta = document.querySelector('.ruleta');
    const ruletaContainer = document.querySelector('.ruleta-container');
    const botonGirar = document.getElementById('girar-ruleta');
    const centroRuleta = document.querySelector('.centro-ruleta');
    const puntero = document.querySelector('.puntero');
    
    if (ruleta) {
      ruleta.style.boxShadow = `0 0 30px ${coloresActuales.shadow}`;
    }
    
    if (ruletaContainer) {
      ruletaContainer.style.boxShadow = `0 0 50px ${coloresActuales.shadow}`;
    }
    
    if (botonGirar) {
      botonGirar.style.background = `linear-gradient(45deg, ${coloresActuales.primary}, ${coloresActuales.secondary})`;
      botonGirar.style.boxShadow = `0 4px 20px ${coloresActuales.shadow}`;
    }
    
    if (centroRuleta) {
      centroRuleta.style.background = `linear-gradient(45deg, ${coloresActuales.primary}, ${coloresActuales.secondary})`;
      centroRuleta.style.boxShadow = `0 0 20px ${coloresActuales.shadow}`;
    }
    
    if (puntero) {
      puntero.style.background = coloresActuales.primary;
      puntero.style.boxShadow = `0 0 10px ${coloresActuales.shadow}`;
    }
    
    // Aplicar colores a las secciones de la ruleta
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach((seccion, index) => {
      const hue = (index * 45 + parseInt(coloresActuales.primary.slice(1), 16)) % 360;
      const color = `hsl(${hue}, 70%, 60%)`;
      seccion.style.background = color;
      seccion.style.boxShadow = `0 0 10px ${color}80`;
    });
  }
  
  function aplicarColoresAElementos() {
    // Aplicar colores a botones
    const botones = document.querySelectorAll('.boton');
    botones.forEach(boton => {
      boton.style.background = `linear-gradient(45deg, ${coloresActuales.primary}, ${coloresActuales.secondary})`;
      boton.style.boxShadow = `0 4px 15px ${coloresActuales.shadow}`;
      boton.style.borderColor = coloresActuales.border;
    });
    
    // Aplicar colores a tarjetas
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(tarjeta => {
      tarjeta.style.borderColor = coloresActuales.border;
      tarjeta.style.boxShadow = `0 4px 20px ${coloresActuales.shadow}`;
    });
    
    // Aplicar colores a headers
    const headers = document.querySelectorAll('header');
    headers.forEach(header => {
      header.style.background = `linear-gradient(135deg, ${coloresActuales.primary}, ${coloresActuales.secondary})`;
    });
    
    // Aplicar colores a elementos del chatbot
    const chatbotHeader = document.querySelector('.chatbot-header');
    if (chatbotHeader) {
      chatbotHeader.style.background = `linear-gradient(90deg, ${coloresActuales.primary}, ${coloresActuales.secondary})`;
    }
    
    const chatbotContainer = document.querySelector('.chatbot-container');
    if (chatbotContainer) {
      chatbotContainer.style.borderColor = coloresActuales.border;
      chatbotContainer.style.boxShadow = `0 0 30px ${coloresActuales.shadow}`;
    }
    
    // Aplicar colores a botones de opciones del chatbot
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
      button.style.borderColor = coloresActuales.border;
      button.addEventListener('mouseenter', () => {
        button.style.background = `rgba(${coloresActuales.primary.slice(1).match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.8)`;
      });
      button.addEventListener('mouseleave', () => {
        button.style.background = `rgba(${coloresActuales.primary.slice(1).match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.5)`;
      });
    });
    
    // Aplicar colores a elementos de la mascota
    const mascotaButtons = document.querySelectorAll('.boton-accion');
    mascotaButtons.forEach(button => {
      button.style.borderColor = coloresActuales.border;
    });
    
    const mascotaModal = document.querySelector('.modal-content-mascota');
    if (mascotaModal) {
      mascotaModal.style.borderColor = coloresActuales.border;
    }
    
    // Aplicar colores a elementos de logros
    const logroItems = document.querySelectorAll('.logro-item');
    logroItems.forEach(item => {
      if (item.classList.contains('completado')) {
        item.style.borderColor = coloresActuales.primary;
        item.style.background = `linear-gradient(45deg, ${coloresActuales.primary}20, ${coloresActuales.secondary}20)`;
        item.style.boxShadow = `0 4px 15px ${coloresActuales.shadow}`;
      } else {
        item.style.borderColor = coloresActuales.border;
        item.style.background = `rgba(${coloresActuales.primary.slice(1).match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.1)`;
      }
    });
    
    // Aplicar colores a elementos de la tienda
    const mascotaCards = document.querySelectorAll('.mascota-card');
    mascotaCards.forEach(card => {
      card.style.borderColor = coloresActuales.border;
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = `0 8px 25px ${coloresActuales.shadow}`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = `0 4px 15px rgba(0, 0, 0, 0.1)`;
      });
    });
    
    // Aplicar colores a elementos del calendario
    const calendario = document.querySelector('.calendario');
    if (calendario) {
      calendario.style.borderColor = coloresActuales.border;
      calendario.style.boxShadow = `0 4px 20px ${coloresActuales.shadow}`;
    }
    
    // Aplicar colores a días del calendario
    const diasCalendario = document.querySelectorAll('.dia');
    diasCalendario.forEach(dia => {
      if (dia.classList.contains('visto')) {
        dia.style.background = `linear-gradient(45deg, ${coloresActuales.primary}, ${coloresActuales.secondary})`;
        dia.style.boxShadow = `0 2px 10px ${coloresActuales.shadow}`;
      } else if (dia.classList.contains('desbloqueado')) {
        dia.style.borderColor = coloresActuales.border;
        dia.addEventListener('mouseenter', () => {
          dia.style.background = `rgba(${coloresActuales.primary.slice(1).match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`;
        });
        dia.addEventListener('mouseleave', () => {
          dia.style.background = '';
        });
      }
    });
    
    // Aplicar colores a modales del calendario
    const modalFrase = document.querySelector('.modal-frase');
    if (modalFrase) {
      const modalContenido = modalFrase.querySelector('.modal-contenido');
      if (modalContenido) {
        modalContenido.style.borderColor = coloresActuales.border;
        modalContenido.style.boxShadow = `0 10px 30px ${coloresActuales.shadow}`;
      }
    }
    
    // Aplicar colores a elementos del diario
    const diario = document.querySelector('.diario');
    if (diario) {
      diario.style.borderColor = coloresActuales.border;
      diario.style.boxShadow = `0 4px 20px ${coloresActuales.shadow}`;
    }
    
    // Aplicar colores a botón flotante del diario
    const btnFlotante = document.getElementById('btn-flotante');
    if (btnFlotante) {
      btnFlotante.style.background = `linear-gradient(45deg, ${coloresActuales.primary}, ${coloresActuales.secondary})`;
      btnFlotante.style.boxShadow = `0 4px 15px ${coloresActuales.shadow}`;
    }
    
    // Aplicar colores a contenedor de logros
    const logrosContainer = document.querySelector('.logros');
    if (logrosContainer) {
      logrosContainer.style.borderColor = coloresActuales.border;
      logrosContainer.style.boxShadow = `0 4px 20px ${coloresActuales.shadow}`;
    }
    
    // Aplicar colores a lista de logros
    const listaLogros = document.querySelector('.lista-logros');
    if (listaLogros) {
      listaLogros.style.borderColor = coloresActuales.border;
    }
  }
  
  // Función para aplicar colores al cargar la página
  function aplicarColoresGuardados() {
    const savedColors = localStorage.getItem('zodiac-colors');
    if (savedColors) {
      coloresActuales = JSON.parse(savedColors);
      
      // Aplicar colores básicos
      const root = document.documentElement;
      root.style.setProperty('--zodiac-primary', coloresActuales.primary);
      root.style.setProperty('--zodiac-secondary', coloresActuales.secondary);
      root.style.setProperty('--zodiac-shadow', coloresActuales.shadow);
      root.style.setProperty('--zodiac-light', coloresActuales.light);
      root.style.setProperty('--zodiac-text', coloresActuales.text);
      root.style.setProperty('--zodiac-border', coloresActuales.border);
      
      // Aplicar colores a elementos específicos
      setTimeout(() => {
        aplicarColoresARuleta();
        aplicarColoresAElementos();
      }, 100);
    }
  }
  
  // Función para aplicar colores a elementos dinámicos
  function aplicarColoresADinamicos() {
    if (!coloresActuales) return;
    
    // Aplicar colores a días del calendario que se crean dinámicamente
    const diasCalendario = document.querySelectorAll('.dia');
    diasCalendario.forEach(dia => {
      if (dia.classList.contains('visto')) {
        dia.style.background = `linear-gradient(45deg, ${coloresActuales.primary}, ${coloresActuales.secondary})`;
        dia.style.boxShadow = `0 2px 10px ${coloresActuales.shadow}`;
      } else if (dia.classList.contains('desbloqueado')) {
        dia.style.borderColor = coloresActuales.border;
        dia.addEventListener('mouseenter', () => {
          dia.style.background = `rgba(${coloresActuales.primary.slice(1).match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`;
        });
        dia.addEventListener('mouseleave', () => {
          dia.style.background = '';
        });
      }
    });
    
    // Aplicar colores a logros que se crean dinámicamente
    const logroItems = document.querySelectorAll('.logro-item');
    logroItems.forEach(item => {
      if (item.classList.contains('completado')) {
        item.style.borderColor = coloresActuales.primary;
        item.style.background = `linear-gradient(45deg, ${coloresActuales.primary}20, ${coloresActuales.secondary}20)`;
        item.style.boxShadow = `0 4px 15px ${coloresActuales.shadow}`;
      } else {
        item.style.borderColor = coloresActuales.border;
        item.style.background = `rgba(${coloresActuales.primary.slice(1).match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.1)`;
      }
    });
  }
  
  // Exportar funciones para uso en otras páginas
  window.ZodiacColors = {
    applyZodiacColorsToPage,
    getStoredColors: () => {
      const savedColors = localStorage.getItem('zodiac-colors');
      return savedColors ? JSON.parse(savedColors) : null;
    },
    getStoredSign: () => localStorage.getItem('zodiac-sign'),
    aplicarColoresGuardados,
    aplicarColoresADinamicos
  };
  