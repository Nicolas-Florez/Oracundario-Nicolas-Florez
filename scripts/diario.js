const btnFlotante = document.getElementById("btn-flotante");
const modal = document.getElementById("modal-nota");
const cerrarModalBtn = document.getElementById("cerrar-modal");
const guardarModalBtn = document.getElementById("guardar-modal-nota");
const tituloInput = document.getElementById("titulo-nota");
const contenidoInput = document.getElementById("contenido-nota");
const historial = document.getElementById("historial-notas");

let modoEdicion = false;
let claveEditando = null;

// Abrir modal para nueva nota
btnFlotante.addEventListener("click", () => {
  modoEdicion = false;
  claveEditando = null;
  abrirModal();
});

// Función para abrir modal
function abrirModal(titulo = "", contenido = "") {
  modal.classList.remove("oculto");
  tituloInput.value = titulo;
  contenidoInput.value = contenido;
  document.getElementById("titulo-modal").textContent = modoEdicion ? "Editar Nota" : "Nueva Nota";
  tituloInput.focus();
}

// Cerrar modal
cerrarModalBtn.addEventListener("click", () => {
  modal.classList.add("oculto");
  limpiarModal();
});

function limpiarModal() {
  tituloInput.value = "";
  contenidoInput.value = "";
  modoEdicion = false;
  claveEditando = null;
  document.getElementById("titulo-modal").textContent = "Nueva Nota";
}

// Guardar nota desde modal
guardarModalBtn.addEventListener("click", () => {
  const titulo = tituloInput.value.trim();
  const contenido = contenidoInput.value.trim();

  if (!titulo) {
    alert("⚠️ El título no puede estar vacío.");
    tituloInput.focus();
    return;
  }
  if (!contenido) {
    alert("⚠️ El contenido no puede estar vacío.");
    contenidoInput.focus();
    return;
  }

  let clave;

  if (modoEdicion && claveEditando) {
    clave = claveEditando;
  } else {
    const fecha = new Date().toISOString().slice(0, 10);
    clave = "nota_" + fecha;
    if (localStorage.getItem(clave)) {
      const sobrescribir = confirm("Ya existe una nota para hoy. ¿Deseas sobrescribirla?");
      if (!sobrescribir) return;
    }
  }

  // Guardar en localStorage en formato JSON con título y contenido
  const notaObj = { titulo, contenido };
  localStorage.setItem(clave, JSON.stringify(notaObj));

  limpiarModal();
  modal.classList.add("oculto");
  cargarNotas();
  alert("✅ Nota guardada.");
});

// Cargar historial de notas y mostrar título y contenido
function cargarNotas() {
  historial.innerHTML = "";
  const claves = Object.keys(localStorage)
    .filter(k => k.startsWith("nota_"))
    .sort()
    .reverse();

  if (claves.length === 0) {
    historial.innerHTML = "<p class='sin-notas'>No hay notas todavía.</p>";
    return;
  }

  claves.forEach(clave => {
    const notaJSON = localStorage.getItem(clave);
    let notaObj;
    try {
      notaObj = JSON.parse(notaJSON);
    } catch {
      notaObj = { titulo: "Sin título", contenido: notaJSON };
    }

    const div = document.createElement("div");
    div.classList.add("nota-item");

    const botones = `
      <div class="botones-nota">
        <button class="boton-accion editar" title="Editar" data-clave="${clave}">✏️</button>
        <button class="boton-accion eliminar" title="Eliminar" data-clave="${clave}">🗑️</button>
      </div>
    `;

    div.innerHTML = `
      <h4>📅 ${clave.replace("nota_", "")} - ${notaObj.titulo}</h4>
      <p>${notaObj.contenido}</p>
      ${botones}
    `;

    historial.appendChild(div);
  });

  activarBotones();
}

// Editar nota desde el historial (abrir modal con datos)
function activarBotones() {
  document.querySelectorAll(".boton-accion.editar").forEach(btn => {
    btn.addEventListener("click", () => {
      const clave = btn.dataset.clave;
      const notaJSON = localStorage.getItem(clave);
      if (!notaJSON) return;

      let notaObj;
      try {
        notaObj = JSON.parse(notaJSON);
      } catch {
        notaObj = { titulo: "", contenido: notaJSON };
      }

      modoEdicion = true;
      claveEditando = clave;
      modal.classList.remove("oculto");
      tituloInput.value = notaObj.titulo;
      contenidoInput.value = notaObj.contenido;
      document.getElementById("titulo-modal").textContent = "Editar Nota";
      tituloInput.focus();
    });
  });

  document.querySelectorAll(".boton-accion.eliminar").forEach(btn => {
    btn.addEventListener("click", () => {
      const clave = btn.dataset.clave;
      const confirmar = confirm("¿Estás seguro de que deseas eliminar esta nota?");
      if (confirmar) {
        localStorage.removeItem(clave);
        cargarNotas();
      }
    });
  });
}

// Inicializar
cargarNotas();
