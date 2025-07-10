const diccionarioPalabras = {
    amor: {
        'A': ['Abrazo tierno que consuela el alma', 'Atardecer que nos une para siempre', 'Amanecer lleno de promesas'],
        'B': ['Beso suave como la brisa', 'Belleza que ilumina mi mundo', 'Bondad que me hace mejor'],
        'C': ['Corazón que late al unísono', 'Caricia que calma mis penas', 'Confianza que nos fortalece'],
        'D': ['Dulzura en cada mirada', 'Destino que nos encontró', 'Devoción que nunca termina'],
        'E': ['Eternidad en tus ojos', 'Esperanza que florece', 'Encanto que me cautiva'],
        'F': ['Felicidad que compartimos', 'Fuerza que me das cada día', 'Fidelidad que nos une'],
        'G': ['Gracia en cada movimiento', 'Gratitud por tenerte', 'Guía en mi camino'],
        'H': ['Hogar en tus brazos', 'Honestidad que valoro', 'Hechizo de tu sonrisa'],
        'I': ['Infinito amor que siento', 'Ilusión que se hace real', 'Inspiración de mi vida'],
        'J': ['Júbilo cuando te veo', 'Juventud que me devuelves', 'Justicia de tu corazón'],
        'K': ['Karma bendito que nos unió', 'Kilo de amor que me das', 'Kilómetros que recorrería'],
        'L': ['Luz que ilumina mis días', 'Lazo que nos une', 'Libertad que me brindas'],
        'M': ['Magia en cada encuentro', 'Melodía de tu voz', 'Milagro de tenerte'],
        'N': ['Noche estrellada contigo', 'Nobleza de tu alma', 'Necesidad de tu amor'],
        'O': ['Océano de sentimientos', 'Oportunidad de amarte', 'Optimismo que me contagias'],
        'P': ['Pasión que nos consume', 'Paz que encuentro en ti', 'Promesa de eternidad'],
        'Q': ['Quimera hecha realidad', 'Quietud en tu regazo', 'Querencia que me llama'],
        'R': ['Refugio en tus brazos', 'Respeto que nos tenemos', 'Risa que compartimos'],
        'S': ['Sueño que se cumplió', 'Sonrisa que me enamora', 'Silencio que habla'],
        'T': ['Ternura en cada gesto', 'Tiempo que se detiene', 'Tesoro que eres'],
        'U': ['Universo en tu mirada', 'Unión que nos completa', 'Único amor verdadero'],
        'V': ['Vida que me das', 'Verdad en tus palabras', 'Valor de tu cariño'],
        'W': ['Waltz que bailamos juntos', 'Whisper de tu alma', 'Wanderlust por tu amor'],
        'X': ['Xilófono de risas', 'Xystus de nuestros paseos', 'Xerez de dulces momentos'],
        'Y': ['Yin y yang que somos', 'Yugular que palpita', 'Yacimiento de caricias'],
        'Z': ['Zafiro de tu mirada', 'Zenit de mi felicidad', 'Zumbido de mariposas']
    },
    naturaleza: {
        'A': ['Agua cristalina que fluye', 'Árbol que da sombra', 'Ave que vuela libre'],
        'B': ['Brisa suave del amanecer', 'Bosque lleno de vida', 'Brote que renace'],
        'C': ['Cielo infinito y azul', 'Campo verde que se extiende', 'Cascada que canta'],
        'D': ['Desierto de arena dorada', 'Delfín que salta alegre', 'Duna que el viento forma'],
        'E': ['Estrella que guía el camino', 'Eco que resuena en el valle', 'Espiga que ondula'],
        'F': ['Flor que perfuma el aire', 'Fuego que calienta el alma', 'Fruto maduro y dulce'],
        'G': ['Gota de rocío matutino', 'Gavilan que planea alto', 'Girasol que sigue al sol'],
        'H': ['Hoja que danza en el viento', 'Horizonte que se aleja', 'Huella en la arena'],
        'I': ['Isla perdida en el mar', 'Insecto que poliniza', 'Iris después de la lluvia'],
        'J': ['Jardín en plena floración', 'Jilguero que canta al alba', 'Junco que se mece'],
        'K': ['Kiwi que anida en secreto', 'Koala entre eucaliptos', 'Kelp que ondula'],
        'L': ['Luna que refleja en el lago', 'Libélula sobre el agua', 'Loto que emerge puro'],
        'M': ['Montaña que toca el cielo', 'Mar que abraza la orilla', 'Mariposa multicolor'],
        'N': ['Nube que cambia de forma', 'Nido tejido con amor', 'Nectar que alimenta'],
        'O': ['Océano profundo y misterioso', 'Olivo centenario', 'Orquídea exótica'],
        'P': ['Pino que resiste el tiempo', 'Playa de arena blanca', 'Pétalo que cae suave'],
        'Q': ['Quetzal de plumas brillantes', 'Quebrada que serpentea', 'Quelonio milenario'],
        'R': ['Río que busca el mar', 'Rosa que florece', 'Roca que el tiempo esculpe'],
        'S': ['Sol que da vida', 'Selva tupida y verde', 'Semilla que germina'],
        'T': ['Tierra fértil y generosa', 'Trueno que anuncia lluvia', 'Trébol de cuatro hojas'],
        'U': ['Universo lleno de estrellas', 'Ulmo que da sombra', 'Uva que madura'],
        'V': ['Valle entre montañas', 'Viento que susurra secretos', 'Violeta tímida'],
        'W': ['Wombat que excava', 'Willow que llora', 'Waterfall que refresca'],
        'X': ['Xerófita que resiste', 'Xilema que nutre', 'Xenops que trepa'],
        'Y': ['Yuca que florece', 'Yak en la montaña', 'Yacaré que reposa'],
        'Z': ['Zorzal que canta al amanecer', 'Zambullida en aguas claras', 'Zafiro del cielo']
    },
    esperanza: {
        'A': ['Amanecer que trae nuevas oportunidades', 'Aliento que no se rinde', 'Alma que busca la luz'],
        'B': ['Brillo en la oscuridad', 'Búsqueda de un mañana mejor', 'Bendición que llega'],
        'C': ['Camino que se abre', 'Confianza en el futuro', 'Corazón que no se rinde'],
        'D': ['Despertar de nuevas ilusiones', 'Determinación que persiste', 'Dulce promesa'],
        'E': ['Esperanza que nunca muere', 'Estrella que guía', 'Energía renovada'],
        'F': ['Fe que nos sostiene', 'Fuerza interior que resurge', 'Futuro prometedor'],
        'G': ['Ganas de seguir adelante', 'Gracia que nos acompaña', 'Gratitud por la vida'],
        'H': ['Horizonte lleno de posibilidades', 'Huellas hacia el mañana', 'Hilo de esperanza'],
        'I': ['Ilusión que se renueva', 'Inspiración que nos mueve', 'Infinitas posibilidades'],
        'J': ['Júbilo que renace', 'Juventud del espíritu', 'Justicia que llegará'],
        'K': ['Karma que mejora', 'Kilómetros por recorrer', 'Kilo de fe'],
        'L': ['Luz al final del túnel', 'Lucha que vale la pena', 'Lágrima que sana'],
        'M': ['Mañana será mejor', 'Milagro que esperamos', 'Meta que alcanzar'],
        'N': ['Nuevo día que llega', 'Nobleza que prevalece', 'Nube que se disipa'],
        'O': ['Oportunidad que surge', 'Optimismo que contagia', 'Oración que se escucha'],
        'P': ['Promesa de días mejores', 'Persistencia que triunfa', 'Puerta que se abre'],
        'Q': ['Quimera que se hace real', 'Quietud después de la tormenta', 'Querencia del alma'],
        'R': ['Renacer después de la caída', 'Resistencia que no cede', 'Rayo de esperanza'],
        'S': ['Sueño que se cumplirá', 'Sonrisa que regresa', 'Semilla de futuro'],
        'T': ['Tiempo que todo sana', 'Tesoro que encontraremos', 'Triunfo que llegará'],
        'U': ['Universo de posibilidades', 'Unión que nos fortalece', 'Último aliento de fe'],
        'V': ['Victoria que se acerca', 'Vida que se renueva', 'Viento de cambio'],
        'W': ['Wish que se cumple', 'Warmth del corazón', 'Wonder que inspira'],
        'X': ['Xilófono de alegría', 'Xystus de paz', 'Xerez de celebración'],
        'Y': ['Yin y yang en equilibrio', 'Yogui que medita', 'Yacimiento de fe'],
        'Z': ['Zenit de nuestros sueños', 'Zafiro de esperanza', 'Zumbido de vida']
    },
    libertad: {
        'A': ['Alas que nos dan vuelo', 'Autonomía para decidir', 'Aire fresco de independencia'],
        'B': ['Barreras que se rompen', 'Búsqueda de la propia verdad', 'Brillo de la autodeterminación'],
        'C': ['Cadenas que se quiebran', 'Camino que elegimos', 'Cielo abierto sin límites'],
        'D': ['Decisión que tomamos', 'Derecho a ser nosotros', 'Danza libre del espíritu'],
        'E': ['Elección que nos define', 'Espacio para crecer', 'Expresión sin censura'],
        'F': ['Fuerza para romper moldes', 'Firmeza en nuestras convicciones', 'Vuelo sin ataduras'],
        'G': ['Gritos de independencia', 'Grandeza del ser libre', 'Grillos que se rompen'],
        'H': ['Horizonte sin fronteras', 'Huellas de nuestro camino', 'Honor de ser auténticos'],
        'I': ['Independencia conquistada', 'Impulso hacia lo desconocido', 'Ímpetu de libertad'],
        'J': ['Justicia que reclamamos', 'Júbilo de la emancipación', 'Jornada hacia la libertad'],
        'K': ['Karma que liberamos', 'Kilómetros de territorio libre', 'Kilo de dignidad'],
        'L': ['Libertad que conquistamos', 'Lucha por ser libres', 'Lágrimas de alegría'],
        'M': ['Mente abierta y libre', 'Marcha hacia la independencia', 'Muro que derribamos'],
        'N': ['No a la opresión', 'Nobleza de espíritu libre', 'Nube que se disipa'],
        'O': ['Oportunidad de elegir', 'Optimismo de los libres', 'Océano de posibilidades'],
        'P': ['Pensamiento sin censura', 'Paso firme hacia adelante', 'Puerta que se abre'],
        'Q': ['Quiebre de las cadenas', 'Quietud del alma libre', 'Querencia propia'],
        'R': ['Resistencia que libera', 'Rumbo que marcamos', 'Respirar aires de libertad'],
        'S': ['Sueño de independencia', 'Salto hacia lo desconocido', 'Sonrisa de liberación'],
        'T': ['Territorio sin fronteras', 'Triunfo de la voluntad', 'Tiempo que es nuestro'],
        'U': ['Universo de opciones', 'Unión en la diversidad', 'Último eslabón roto'],
        'V': ['Vuelo sin ataduras', 'Voluntad que no se dobla', 'Viento que nos empuja'],
        'W': ['Wings que nos elevan', 'Will que nos define', 'Wonder de ser libres'],
        'X': ['Xilófono de celebración', 'Xystus de libertad', 'Xerez de victoria'],
        'Y': ['Yin y yang en libertad', 'Yogui que medita libre', 'Yacimiento de esperanza'],
        'Z': ['Zenit de la libertad', 'Zafiro de independencia', 'Zumbido de alegría']
    },
    mistico: {
        'A': ['Alma que busca la trascendencia', 'Aura que brilla en la oscuridad', 'Arcano que se revela'],
        'B': ['Bruja que conoce los secretos', 'Bendición de los ancestros', 'Búsqueda del conocimiento oculto'],
        'C': ['Cristal que canaliza energías', 'Círculo sagrado de protección', 'Conjuro que transforma'],
        'D': ['Dimensión más allá del velo', 'Deidad que nos protege', 'Danza ritual bajo la luna'],
        'E': ['Esencia que trasciende la materia', 'Espíritu que nunca muere', 'Energía que fluye libre'],
        'F': ['Fuego sagrado que purifica', 'Fuerza cósmica que nos guía', 'Fórmula mágica ancestral'],
        'G': ['Grimorio de sabiduría antigua', 'Guardián de los secretos', 'Gema que potencia poderes'],
        'H': ['Hechizo que protege', 'Hierba sagrada que sana', 'Halo de luz divina'],
        'I': ['Incienso que eleva plegarias', 'Intuición que nos guía', 'Invocación al universo'],
        'J': ['Jade que atrae la fortuna', 'Joya del conocimiento', 'Juramento sagrado'],
        'K': ['Karma que equilibra', 'Kilo de sabiduría', 'Kundalini que despierta'],
        'L': ['Luna que rige los ciclos', 'Luz que disipa las sombras', 'Línea entre mundos'],
        'M': ['Magia que transforma', 'Mandala que centra', 'Misterio que se desvela'],
        'N': ['Néctar de los dioses', 'Numerología que predice', 'Nigromancia que revela'],
        'O': ['Oráculo que profetiza', 'Ofrenda a los espíritus', 'Om que resuena'],
        'P': ['Péndulo que adivina', 'Piedra filosofal', 'Puerta entre dimensiones'],
        'Q': ['Quartz que amplifica', 'Quietud del alma', 'Quiromancia que lee'],
        'R': ['Ritual que consagra', 'Runa que protege', 'Respiración que eleva'],
        'S': ['Símbolo que concentra poder', 'Sabiduría de los antiguos', 'Santuario sagrado'],
        'T': ['Tarot que revela destinos', 'Talismán que protege', 'Transmutación alquímica'],
        'U': ['Universo que conspira', 'Unión con lo divino', 'Umbral entre mundos'],
        'V': ['Vidente que percibe', 'Vela que ilumina', 'Vibración cósmica'],
        'W': ['Wicca que celebra', 'Wizard que transforma', 'Wonder del misterio'],
        'X': ['Xilomancia que predice', 'Xenoglossía que revela', 'Xerez de celebración'],
        'Y': ['Yin y yang en equilibrio', 'Yoga que conecta', 'Yacimiento de poder'],
        'Z': ['Zodíaco que influye', 'Zafiro místico', 'Zen que trasciende']
    },
    aventura: {
        'A': ['Aventura que nos llama', 'Altura que conquistamos', 'Adrenalina que nos mueve'],
        'B': ['Brújula que nos guía', 'Barca que surca mares', 'Búsqueda del tesoro'],
        'C': ['Camino inexplorado', 'Cumbre que alcanzamos', 'Coraje para seguir'],
        'D': ['Descubrimiento que nos espera', 'Desafío que aceptamos', 'Destino desconocido'],
        'E': ['Exploración sin límites', 'Expedición hacia lo ignoto', 'Emoción del viaje'],
        'F': ['Frontera que cruzamos', 'Fuerza para continuar', 'Fuego del campamento'],
        'G': ['Gesta heroica', 'Grito de libertad', 'Guía que nos acompaña'],
        'H': ['Horizonte que nos llama', 'Huella que seguimos', 'Hazaña que recordar'],
        'I': ['Isla que descubrimos', 'Impulso aventurero', 'Itinerario sin final'],
        'J': ['Jungla que exploramos', 'Jornada épica', 'Júbilo del descubrimiento'],
        'K': ['Kilómetros por recorrer', 'Kayak que nos lleva', 'Kilo de valentía'],
        'L': ['Lugar nunca visto', 'Leyenda que vivimos', 'Libertad del viajero'],
        'M': ['Montaña que escalamos', 'Mapa del tesoro', 'Misterio por resolver'],
        'N': ['Navegación hacia lo desconocido', 'Naufragio que superamos', 'Norte que buscamos'],
        'O': ['Océano que cruzamos', 'Oportunidad de explorar', 'Osadía que nos mueve'],
        'P': ['Pico que conquistamos', 'Paso que encontramos', 'Puente que construimos'],
        'Q': ['Quimera que perseguimos', 'Quebrada que cruzamos', 'Quilate de experiencia'],
        'R': ['Ruta que trazamos', 'Río que navegamos', 'Riesgo que asumimos'],
        'S': ['Sendero que creamos', 'Selva que atravesamos', 'Sueño que perseguimos'],
        'T': ['Territorio virgen', 'Travesía memorable', 'Tesoro que buscamos'],
        'U': ['Universo por explorar', 'Umbral que cruzamos', 'Último confín'],
        'V': ['Valle que descubrimos', 'Viaje extraordinario', 'Valor para aventurarse'],
        'W': ['Wilderness que exploramos', 'Wonder que encontramos', 'Wave que surfamos'],
        'X': ['Xilófono del viento', 'Xystus del campamento', 'Xerez de celebración'],
        'Y': ['Yacimiento que hallamos', 'Yak que nos acompaña', 'Yoga en la cima'],
        'Z': ['Zenit de la aventura', 'Zona inexplorada', 'Zumbido de la selva']
    }
};

// Variables globales
let acrosticosGuardados = JSON.parse(localStorage.getItem('acrosticosGuardados')) || [];
let acrosticoActual = null;

// Elementos del DOM
const palabraInput = document.getElementById('palabra-input');
const temaSelect = document.getElementById('tema-select');
const generarBtn = document.getElementById('generar-btn');
const errorMensaje = document.getElementById('error-mensaje');
const acrosticoDisplay = document.getElementById('acrostico-display');
const acrosticoContenido = document.getElementById('acrostico-contenido');
const copiarBtn = document.getElementById('copiar-btn');
const guardarBtn = document.getElementById('guardar-btn');
const nuevoBtn = document.getElementById('nuevo-btn');
const historialLista = document.getElementById('historial-lista');
const modal = document.getElementById('modal');
const modalTexto = document.getElementById('modal-texto');
const cerrarModalBtn = document.getElementById('cerrar-modal');

// Event listeners
generarBtn.addEventListener('click', generarAcrostico);
copiarBtn.addEventListener('click', copiarAcrostico);
guardarBtn.addEventListener('click', guardarAcrostico);
nuevoBtn.addEventListener('click', nuevoAcrostico);
cerrarModalBtn.addEventListener('click', cerrarModal);
palabraInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generarAcrostico();
    }
});

// Función para generar acróstico
function generarAcrostico() {
    const palabra = palabraInput.value.trim().toUpperCase();
    const tema = temaSelect.value;
    
    // Validaciones
    if (!palabra) {
        mostrarError('Por favor, ingresa una palabra o frase');
        return;
    }
    
    if (palabra.length > 20) {
        mostrarError('La palabra no puede tener más de 20 caracteres');
        return;
    }
    
    // Limpiar caracteres especiales pero mantener espacios
    const palabraLimpia = palabra.replace(/[^A-ZÁÉÍÓÚÜÑa-záéíóúüñ\s]/g, '');
    
    if (palabraLimpia.length === 0) {
        mostrarError('La palabra debe contener al menos una letra válida');
        return;
    }
    
    ocultarError();
    
    // Generar el acróstico
    const acrostico = crearAcrostico(palabraLimpia, tema);
    mostrarAcrostico(acrostico, palabraLimpia, tema);
}

// Función para crear acróstico
function crearAcrostico(palabra, tema) {
    const lineas = [];
    const diccionario = diccionarioPalabras[tema];
    
    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        
        if (letra === ' ') {
            lineas.push({ letra: ' ', verso: '' });
            continue;
        }
        
        const opcionesLetra = diccionario[letra] || [
            `${letra.toLowerCase()}ermoso verso que crear`,
            `${letra.toLowerCase()}úsica que el alma inspira`,
            `${letra.toLowerCase()}ensamiento que florece`
        ];
        
        const versoAleatorio = opcionesLetra[Math.floor(Math.random() * opcionesLetra.length)];
        lineas.push({ letra, verso: versoAleatorio });
    }
    
    return lineas;
}

// Función para mostrar acróstico
function mostrarAcrostico(acrostico, palabra, tema) {
    acrosticoContenido.innerHTML = '';
    
    acrostico.forEach(linea => {
        const lineaDiv = document.createElement('div');
        lineaDiv.className = 'acrostico-linea';
        
        if (linea.letra === ' ') {
            lineaDiv.innerHTML = '<div class="letra-inicial">&nbsp;</div><div class="verso">&nbsp;</div>';
        } else {
            lineaDiv.innerHTML = `
                <div class="letra-inicial">${linea.letra}</div>
                <div class="verso">${linea.verso}</div>
            `;
        }
        
        acrosticoContenido.appendChild(lineaDiv);
    });
    
    acrosticoActual = {
        palabra: palabra,
        tema: tema,
        acrostico: acrostico,
        fecha: new Date().toLocaleDateString('es-ES')
    };
    
    acrosticoDisplay.style.display = 'block';
    acrosticoDisplay.classList.add('fade-in');
    
    // Scroll suave al resultado
    acrosticoDisplay.scrollIntoView({ behavior: 'smooth' });
}

// Función para copiar acróstico
function copiarAcrostico() {
    if (!acrosticoActual) return;
    
    let texto = `ACRÓSTICO: ${acrosticoActual.palabra}\n`;
    texto += `Tema: ${acrosticoActual.tema}\n`;
    texto += `Fecha: ${acrosticoActual.fecha}\n\n`;
    
    acrosticoActual.acrostico.forEach(linea => {
        if (linea.letra === ' ') {
            texto += '\n';
        } else {
            texto += `${linea.letra} - ${linea.verso}\n`;
        }
    });
    
    navigator.clipboard.writeText(texto).then(() => {
        mostrarModal('¡Acróstico copiado al portapapeles!');
    }).catch(() => {
        mostrarModal('Error al copiar. Inténtalo de nuevo.');
    });
}

// Función para guardar acróstico
function guardarAcrostico() {
    if (!acrosticoActual) return;
    
    const acrosticoConId = {
        ...acrosticoActual,
        id: Date.now(),
        fechaCompleta: new Date().toLocaleString('es-ES')
    };
    
    acrosticosGuardados.unshift(acrosticoConId);
    
    // Mantener máximo 20 acrósticos
    if (acrosticosGuardados.length > 20) {
        acrosticosGuardados = acrosticosGuardados.slice(0, 20);
    }
    
    localStorage.setItem('acrosticosGuardados', JSON.stringify(acrosticosGuardados));
    actualizarHistorial();
    mostrarModal('¡Acróstico guardado correctamente!');
}

// Función para nuevo acróstico
function nuevoAcrostico() {
    palabraInput.value = '';
    temaSelect.value = 'amor';
    acrosticoDisplay.style.display = 'none';
    acrosticoActual = null;
    ocultarError();
    palabraInput.focus();
}

// Función para actualizar historial
function actualizarHistorial() {
    if (acrosticosGuardados.length === 0) {
        historialLista.innerHTML = '<p class="historial-vacio">No hay acrósticos guardados aún. ¡Crea tu primer acróstico!</p>';
        return;
    }
    
    historialLista.innerHTML = '';
    
    acrosticosGuardados.forEach(acrostico => {
        const item = document.createElement('div');
        item.className = 'historial-item';
        
        const preview = acrostico.acrostico.map(linea => 
            linea.letra === ' ' ? '' : `${linea.letra} - ${linea.verso}`
        ).filter(linea => linea).slice(0, 3).join('\n');
        
        item.innerHTML = `
            <h4>${acrostico.palabra}</h4>
            <div class="fecha">${acrostico.fechaCompleta} - Tema: ${acrostico.tema}</div>
            <div class="acrostico-preview">${preview}${acrostico.acrostico.length > 3 ? '...' : ''}</div>
            <div class="botones-item">
                <button class="boton-historial" onclick="verAcrostico(${acrostico.id})">Ver</button>
                <button class="boton-historial" onclick="copiarAcrosticoGuardado(${acrostico.id})">Copiar</button>
                <button class="boton-historial eliminar" onclick="eliminarAcrostico(${acrostico.id})">Eliminar</button>
            </div>
        `;
        
        historialLista.appendChild(item);
    });
}

// Función para ver acróstico guardado
function verAcrostico(id) {
    const acrostico = acrosticosGuardados.find(a => a.id === id);
    if (!acrostico) return;
    
    acrosticoActual = acrostico;
    mostrarAcrostico(acrostico.acrostico, acrostico.palabra, acrostico.tema);
    
    // Actualizar formulario
    palabraInput.value = acrostico.palabra;
    temaSelect.value = acrostico.tema;
}

// Función para copiar acróstico guardado
function copiarAcrosticoGuardado(id) {
    const acrostico = acrosticosGuardados.find(a => a.id === id);
    if (!acrostico) return;
    
    let texto = `ACRÓSTICO: ${acrostico.palabra}\n`;
    texto += `Tema: ${acrostico.tema}\n`;
    texto += `Fecha: ${acrostico.fechaCompleta}\n\n`;
    
    acrostico.acrostico.forEach(linea => {
        if (linea.letra === ' ') {
            texto += '\n';
        } else {
            texto += `${linea.letra} - ${linea.verso}\n`;
        }
    });
    
    navigator.clipboard.writeText(texto).then(() => {
        mostrarModal('¡Acróstico copiado al portapapeles!');
    }).catch(() => {
        mostrarModal('Error al copiar. Inténtalo de nuevo.');
    });
}

// Función para eliminar acróstico
function eliminarAcrostico(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este acróstico?')) {
        acrosticosGuardados = acrosticosGuardados.filter(a => a.id !== id);
        localStorage.setItem('acrosticosGuardados', JSON.stringify(acrosticosGuardados));
        actualizarHistorial();
        mostrarModal('Acróstico eliminado correctamente');
    }
}

// Función para mostrar error
function mostrarError(mensaje) {
    errorMensaje.textContent = mensaje;
    errorMensaje.className = 'error-mensaje';
    errorMensaje.style.display = 'block';
}

// Función para ocultar error
function ocultarError() {
    errorMensaje.style.display = 'none';
    errorMensaje.className = 'error-oculto';
}

// Función para mostrar modal
function mostrarModal(mensaje) {
    modalTexto.textContent = mensaje;
    modal.classList.remove('oculto');
    modal.classList.add('fade-in');
}

// Función para cerrar modal
function cerrarModal() {
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.classList.add('oculto');
        modal.classList.remove('fade-in', 'fade-out');
    }, 300);
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
    actualizarHistorial();
    palabraInput.focus();
    
    // Mensaje de bienvenida
    const mensajes = [
        'Donde cada palabra cuenta una historia',
        'Transforma palabras en poesía',
        'Crea magia con cada letra',
        'Inspírate y deja volar tu creatividad'
    ];
    
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    document.getElementById('mensaje-dia').textContent = mensajeAleatorio;
});

// Cerrar modal al hacer clic fuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        cerrarModal();
    }
});
