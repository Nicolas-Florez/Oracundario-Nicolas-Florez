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
  
  // Exportar funciones para uso en otras páginas
  window.ZodiacColors = {
    applyZodiacColorsToPage,
    getStoredColors: () => {
      const savedColors = localStorage.getItem('zodiac-colors');
      return savedColors ? JSON.parse(savedColors) : null;
    },
    getStoredSign: () => localStorage.getItem('zodiac-sign')
  };
  