document.addEventListener('DOMContentLoaded', () => {
    const botonZodiaco = document.getElementById('boton-zodiaco');
    const fechaNacimientoInput = document.getElementById('fecha-nacimiento');
    const signoZodiacalDisplay = document.getElementById('signo-zodiacal-display');
    const body = document.body;

    // Definición de los signos zodiacales con sus rangos de fecha y elemento
    const signosZodiacales = [
        { nombre: "Capricornio", elemento: "tierra", inicio: { mes: 0, dia: 20 }, fin: { mes: 1, dia: 18 } }, // Enero 20 - Febrero 18
        { nombre: "Acuario", elemento: "aire", inicio: { mes: 1, dia: 19 }, fin: { mes: 2, dia: 20 } }, // Febrero 19 - Marzo 20
        { nombre: "Piscis", elemento: "agua", inicio: { mes: 2, dia: 21 }, fin: { mes: 3, dia: 19 } }, // Marzo 21 - Abril 19
        { nombre: "Aries", elemento: "fuego", inicio: { mes: 3, dia: 20 }, fin: { mes: 4, dia: 20 } }, // Abril 20 - Mayo 20
        { nombre: "Tauro", elemento: "tierra", inicio: { mes: 4, dia: 21 }, fin: { mes: 5, dia: 20 } }, // Mayo 21 - Junio 20
        { nombre: "Géminis", elemento: "aire", inicio: { mes: 5, dia: 21 }, fin: { mes: 6, dia: 20 } }, // Junio 21 - Julio 20
        { nombre: "Cáncer", elemento: "agua", inicio: { mes: 6, dia: 21 }, fin: { mes: 7, dia: 22 } }, // Julio 21 - Agosto 22
        { nombre: "Leo", elemento: "fuego", inicio: { mes: 7, dia: 23 }, fin: { mes: 8, dia: 22 } }, // Agosto 23 - Septiembre 22
        { nombre: "Virgo", elemento: "tierra", inicio: { mes: 8, dia: 23 }, fin: { mes: 9, dia: 22 } }, // Septiembre 23 - Octubre 22
        { nombre: "Libra", elemento: "aire", inicio: { mes: 9, dia: 23 }, fin: { mes: 10, dia: 21 } }, // Octubre 23 - Noviembre 21
        { nombre: "Escorpio", elemento: "agua", inicio: { mes: 10, dia: 22 }, fin: { mes: 11, dia: 21 } }, // Noviembre 22 - Diciembre 21
        { nombre: "Sagitario", elemento: "fuego", inicio: { mes: 11, dia: 22 }, fin: { mes: 0, dia: 19 } }  // Diciembre 22 - Enero 19 (Capricornio)
    ];

    /**
     * Calcula el signo zodiacal y su elemento a partir de una fecha de nacimiento.
     * @param {Date} fechaNacimiento La fecha de nacimiento del usuario.
     * @returns {object|null} Un objeto con el nombre del signo y su elemento, o null si la fecha es inválida.
     */
    function calcularSignoZodiacal(fechaNacimiento) {
        if (!(fechaNacimiento instanceof Date) || isNaN(fechaNacimiento)) {
            return null;
        }

        const mes = fechaNacimiento.getMonth(); // 0-11
        const dia = fechaNacimiento.getDate(); // 1-31

        for (const signo of signosZodiacales) {
            const inicioMes = signo.inicio.mes;
            const inicioDia = signo.inicio.dia;
            const finMes = signo.fin.mes;
            const finDia = signo.fin.dia;

            // Caso normal: el signo está dentro del mismo año (ej: Aries en abril)
            if (inicioMes <= finMes) {
                if ((mes === inicioMes && dia >= inicioDia) ||
                    (mes > inicioMes && mes < finMes) ||
                    (mes === finMes && dia <= finDia)) {
                    return signo;
                }
            } else { // Caso especial: el signo cruza el cambio de año (ej: Sagitario en diciembre/enero)
                if ((mes === inicioMes && dia >= inicioDia) ||
                    (mes > inicioMes) ||
                    (mes < finMes) ||
                    (mes === finMes && dia <= finDia)) {
                    return signo;
                }
            }
        }
        return null; // Esto no debería ocurrir si todos los rangos están cubiertos
    }

    /**
     * Aplica las clases de estilo zodiacal al body y actualiza el display.
     * @param {object|null} signo Un objeto con el nombre del signo y su elemento, o null.
     */
    function aplicarEstiloZodiacal(signo) {
        // Limpiar todas las clases de estilo zodiacal existentes
        body.classList.remove('zodiaco-fuego', 'zodiaco-agua', 'zodiaco-tierra', 'zodiaco-aire');

        if (signo && signo.elemento) {
            body.classList.add(`zodiaco-${signo.elemento}`);
            signoZodiacalDisplay.textContent = `Tu signo es: ${signo.nombre} (${signo.elemento})`;
            localStorage.setItem('estilo_zodiacal_activo', JSON.stringify(signo));
            localStorage.setItem('fecha_nacimiento_guardada', fechaNacimientoInput.value); // Guardar la fecha también
        } else {
            signoZodiacalDisplay.textContent = "Por favor, ingresa una fecha de nacimiento válida.";
            localStorage.removeItem('estilo_zodiacal_activo');
            localStorage.removeItem('fecha_nacimiento_guardada');
        }
    }

    // Event listener para el botón
    botonZodiaco.addEventListener('click', () => {
        const fechaStr = fechaNacimientoInput.value;
        if (fechaStr) {
            const fechaNacimiento = new Date(fechaStr + 'T00:00:00'); // Añadir T00:00:00 para evitar problemas de zona horaria
            const signo = calcularSignoZodiacal(fechaNacimiento);
            aplicarEstiloZodiacal(signo);
        } else {
            aplicarEstiloZodiacal(null); // Mostrar mensaje de error si no hay fecha
        }
    });

    // Cargar estilo y fecha guardados al cargar la página
    const estiloGuardado = localStorage.getItem('estilo_zodiacal_activo');
    const fechaGuardada = localStorage.getItem('fecha_nacimiento_guardada');

    if (fechaGuardada) {
        fechaNacimientoInput.value = fechaGuardada; // Rellenar el input con la fecha guardada
        const fechaNacimiento = new Date(fechaGuardada + 'T00:00:00');
        const signo = calcularSignoZodiacal(fechaNacimiento);
        aplicarEstiloZodiacal(signo);
    } else if (estiloGuardado) { // Si hay un estilo antiguo guardado sin fecha, intentar aplicarlo
        try {
            const signo = JSON.parse(estiloGuardado);
            aplicarEstiloZodiacal(signo);
        } catch (e) {
            console.error("Error al parsear el estilo zodiacal guardado:", e);
            localStorage.removeItem('estilo_zodiacal_activo');
        }
    } else {
        signoZodiacalDisplay.textContent = "Ingresa tu fecha de nacimiento para aplicar un estilo zodiacal.";
    }
});
