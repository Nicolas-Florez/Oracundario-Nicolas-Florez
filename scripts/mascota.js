class MascotaVirtual {
    constructor() {
      // Estados iniciales de la mascota
      this.estado = {
        hambre: 100,
        sueño: 100,
        energia: 100,
        ultimaActualizacion: Date.now()
      };
      
      // Configuración
      this.configuracion = {
        decrementoHambre: 0.5, // puntos por minuto
        decrementoSueño: 0.3,
        decrementoEnergia: 0.4,
        intervaloDegradacion: 60000, // 1 minuto
        cooldownAccion: 10000 // 10 segundos entre acciones
      };
      
      // Estado de la UI
      this.modal = null;
      this.ultimaAccion = 0;
      this.intervaloDegradacion = null;
      
      // Sprites y estados
      this.sprites = {
        feliz: "https://media1.tenor.com/m/8UIam-6E2PQAAAAC/salamander-piano.gif",
        hambriento: "https://media1.tenor.com/m/JX29v_VpvjUAAAAC/axolotl-aw-shucks.gif",
        cansado: "https://media1.tenor.com/m/fIbeBzHCFPsAAAAC/what-huh.gif",
        triste: "https://media1.tenor.com/m/d-awBEN5vmgAAAAC/axolotl-rickroll.gif",
        durmiendo: "https://media1.tenor.com/m/5g1n9q3Q5ZAAAAAC/sleepy-tired.gif",
        jugando: "https://media.tenor.com/1dQm9pYNKvAAAAAi/pet-axolitl-ytp.gif",
        comiendo: "https://media.tenor.com/ZocFNizFXo8AAAAi/gary-the-axolotl.gif",
        default: "https://media.tenor.com/ZjCYoiPG6VAAAAAi/karameru-axolotl.gif"
      };
      
      this.mensajes = {
        feliz: '¡Tu familiar está muy feliz y lleno de energía mística!',
        hambriento: 'Tu familiar tiene hambre... necesita alimento espiritual.',
        cansado: 'Tu familiar se ve cansado, necesita descansar.',
        triste: 'Tu familiar se siente abandonado... Dale un poco de atención.',
        alimentado: '¡Mmm! Tu familiar se siente mucho mejor ahora. ✨',
        jugado: '¡Qué divertido! Tu familiar está lleno de energía. 🎉',
        dormido: '¡Tu familiar tuvo un sueño reparador! 😴💤',
        cooldown: 'Tu familiar necesita un momento antes de la próxima acción.'
      };
      
      this.init();
    }
    
    init() {
      // Cargar estado desde localStorage
      this.cargarEstado();
      
      // Configurar eventos
      this.configurarEventos();
      
      // Iniciar degradación automática
      this.iniciarDegradacion();
      
      // Actualizar UI inicial
      this.actualizarUI();
    }
    
    configurarEventos() {
      // Botón flotante para abrir modal
      const botonMascota = document.getElementById('boton-mascota');
      botonMascota.addEventListener('click', () => this.abrirModal());
      
      // Modal
      this.modal = document.getElementById('modal-mascota');
      
      // Botón cerrar modal
      const cerrarModal = document.getElementById('cerrar-modal');
      cerrarModal.addEventListener('click', () => this.cerrarModal());
      
      // Cerrar modal clickeando fuera
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.cerrarModal();
        }
      });
      
      // Botones de acción
      document.getElementById('btn-alimentar').addEventListener('click', () => this.alimentar());
      document.getElementById('btn-jugar').addEventListener('click', () => this.jugar());
      document.getElementById('btn-dormir').addEventListener('click', () => this.dormir());
      
      // Tecla ESC para cerrar modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('show')) {
          this.cerrarModal();
        }
      });
    }
    
    cargarEstado() {
      const estadoGuardado = localStorage.getItem('mascota_estado');
      if (estadoGuardado) {
        const estado = JSON.parse(estadoGuardado);
        this.estado = { ...this.estado, ...estado };
        
        // Calcular degradación desde la última vez
        const tiempoTranscurrido = Date.now() - this.estado.ultimaActualizacion;
        const minutosTranscurridos = tiempoTranscurrido / 60000;
        
        // Aplicar degradación
        this.estado.hambre = Math.max(0, this.estado.hambre - (minutosTranscurridos * this.configuracion.decrementoHambre));
        this.estado.sueño = Math.max(0, this.estado.sueño - (minutosTranscurridos * this.configuracion.decrementoSueño));
        this.estado.energia = Math.max(0, this.estado.energia - (minutosTranscurridos * this.configuracion.decrementoEnergia));
        
        this.guardarEstado();
      }
    }
    
    guardarEstado() {
      this.estado.ultimaActualizacion = Date.now();
      localStorage.setItem('mascota_estado', JSON.stringify(this.estado));
    }
    
    iniciarDegradacion() {
      this.intervaloDegradacion = setInterval(() => {
        this.degradarEstados();
      }, this.configuracion.intervaloDegradacion);
    }
    
    degradarEstados() {
      const factor = this.configuracion.intervaloDegradacion / 60000; // factor por minuto
      
      this.estado.hambre = Math.max(0, this.estado.hambre - (this.configuracion.decrementoHambre * factor));
      this.estado.sueño = Math.max(0, this.estado.sueño - (this.configuracion.decrementoSueño * factor));
      this.estado.energia = Math.max(0, this.estado.energia - (this.configuracion.decrementoEnergia * factor));
      
      this.guardarEstado();
      this.actualizarUI();
    }
    
    obtenerEstadoMascota() {
      const { hambre, sueño, energia } = this.estado;
      const promedio = (hambre + sueño + energia) / 3;
      
      if (promedio < 20) return 'triste';
      if (hambre < 30) return 'hambriento';
      if (sueño < 30) return 'cansado';
      if (energia < 30) return 'cansado';
      return 'feliz';
    }
    
    abrirModal() {
      this.modal.classList.add('show');
      this.actualizarUI();
      document.body.style.overflow = 'hidden';
    }
    
    cerrarModal() {
      this.modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
    
    actualizarUI() {
        // Actualizar barras de progreso
        this.actualizarBarra('hambre', this.estado.hambre);
        this.actualizarBarra('sueño', this.estado.sueño);
        this.actualizarBarra('energia', this.estado.energia);
        
        // Actualizar sprite y estado
        const estadoActual = this.obtenerEstadoMascota();
        const sprite = document.getElementById('mascota-sprite');
        const status = document.getElementById('mascota-status');
        
        // Mostrar imagen en lugar de emoji
        if (sprite) {
          sprite.innerHTML = ''; // Limpiar contenido previo
          
          // Crear elemento de imagen
          const img = document.createElement('img');
          img.src = this.sprites[estadoActual];
          img.alt = `Mascota ${estadoActual}`;
          img.style.width = '100px';
          img.style.height = '100px';
          img.style.objectFit = 'cover';
          img.style.borderRadius = '50%';
          
          sprite.appendChild(img);
        }
        
        if (status) status.textContent = this.obtenerTextoEstado(estadoActual);
        
        // Actualizar mensaje
        this.mostrarMensaje(this.mensajes[estadoActual]);
        
        // Actualizar botones
        this.actualizarBotones();
      }
    
    actualizarBarra(tipo, valor) {
      const barra = document.getElementById(`barra-${tipo}`);
      const valorTexto = document.getElementById(`${tipo}-valor`);
      
      if (barra) {
        barra.style.width = `${valor}%`;
        
        // Cambiar color según el valor
        if (valor < 30) {
          barra.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
        } else if (valor < 60) {
          barra.style.background = 'linear-gradient(45deg, #ffeaa7, #fdcb6e)';
        } else {
          // Mantener color original
          if (tipo === 'hambre') {
            barra.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
          } else if (tipo === 'sueño') {
            barra.style.background = 'linear-gradient(45deg, #45b7d1, #0984e3)';
          } else {
            barra.style.background = 'linear-gradient(45deg, #ffeaa7, #fdcb6e)';
          }
        }
      }
      
      if (valorTexto) {
        valorTexto.textContent = `${Math.round(valor)}%`;
      }
    }
    
    obtenerTextoEstado(estado) {
      const textos = {
        feliz: 'Radiante de energía ✨',
        hambriento: 'Necesita alimento 🍖',
        cansado: 'Muy cansado 😴',
        triste: 'Se siente solo 😔'
      };
      return textos[estado] || 'Estado desconocido';
    }
    
    mostrarMensaje(mensaje) {
      const mensajeEl = document.getElementById('mascota-mensaje');
      if (mensajeEl) {
        mensajeEl.textContent = mensaje;
        mensajeEl.classList.add('show');
        setTimeout(() => {
          mensajeEl.classList.remove('show');
        }, 500);
      }
    }
    
    actualizarBotones() {
      const ahora = Date.now();
      const enCooldown = (ahora - this.ultimaAccion) < this.configuracion.cooldownAccion;
      
      const botones = ['btn-alimentar', 'btn-jugar', 'btn-dormir'];
      botones.forEach(id => {
        const boton = document.getElementById(id);
        if (boton) {
          boton.disabled = enCooldown;
          if (enCooldown) {
            const tiempoRestante = Math.ceil((this.configuracion.cooldownAccion - (ahora - this.ultimaAccion)) / 1000);
            boton.style.opacity = '0.5';
            boton.title = `Espera ${tiempoRestante} segundos`;
          } else {
            boton.style.opacity = '1';
            boton.title = '';
          }
        }
      });
    }
    
    puedeRealizarAccion() {
      const ahora = Date.now();
      if ((ahora - this.ultimaAccion) < this.configuracion.cooldownAccion) {
        this.mostrarMensaje(this.mensajes.cooldown);
        return false;
      }
      return true;
    }
    
    alimentar() {
        if (!this.puedeRealizarAccion()) return;
        
        const sprite = document.getElementById('mascota-sprite');
        if (sprite) {
          sprite.innerHTML = `<img src="${this.sprites.comiendo}" alt="Mascota comiendo" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">`;
          setTimeout(() => {
            const estadoActual = this.obtenerEstadoMascota();
            sprite.innerHTML = `<img src="${this.sprites[estadoActual]}" alt="Mascota ${estadoActual}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">`;
          }, 2000);
        }
      
      // Aumentar hambre
      this.estado.hambre = Math.min(100, this.estado.hambre + 30);
      
      // Registrar acción
      this.ultimaAccion = Date.now();
      
      // Actualizar UI
      this.actualizarUI();
      this.mostrarMensaje(this.mensajes.alimentado);
      
      // Guardar estado
      this.guardarEstado();
      
      // Crear partículas de comida
      this.crearParticulas('🍖');
    }
    
    jugar() {
        if (!this.puedeRealizarAccion()) return;
        
        // Cambiar sprite temporalmente a imagen de jugando
        const sprite = document.getElementById('mascota-sprite');
        if (sprite) {
          sprite.innerHTML = `<img src="${this.sprites.jugando}" alt="Mascota jugando" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">`;
          setTimeout(() => {
            const estadoActual = this.obtenerEstadoMascota();
            sprite.innerHTML = `<img src="${this.sprites[estadoActual]}" alt="Mascota ${estadoActual}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">`;
          }, 2000);
        }
      
      // Aumentar energía, disminuir un poco hambre
      this.estado.energia = Math.min(100, this.estado.energia + 25);
      this.estado.hambre = Math.max(0, this.estado.hambre - 5);
      
      // Registrar acción
      this.ultimaAccion = Date.now();
      
      // Actualizar UI
      this.actualizarUI();
      this.mostrarMensaje(this.mensajes.jugado);
      
      // Guardar estado
      this.guardarEstado();
      
      // Crear partículas de juego
      this.crearParticulas('⚡');
    }
    
    dormir() {
        if (!this.puedeRealizarAccion()) return;
        
        // Cambiar sprite temporalmente a imagen de durmiendo
        const sprite = document.getElementById('mascota-sprite');
        if (sprite) {
          sprite.innerHTML = `<img src="${this.sprites.durmiendo}" alt="Mascota durmiendo" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">`;
          setTimeout(() => {
            const estadoActual = this.obtenerEstadoMascota();
            sprite.innerHTML = `<img src="${this.sprites[estadoActual]}" alt="Mascota ${estadoActual}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">`;
          }, 3000); // Tiempo más largo para dormir
        }
      
      // Restaurar sueño y energía
      this.estado.sueño = Math.min(100, this.estado.sueño + 40);
      this.estado.energia = Math.min(100, this.estado.energia + 20);
      
      // Registrar acción
      this.ultimaAccion = Date.now();
      
      // Actualizar UI
      this.actualizarUI();
      this.mostrarMensaje(this.mensajes.dormido);
      
      // Guardar estado
      this.guardarEstado();
      
      // Crear partículas de sueño
      this.crearParticulas('💤');
    }
    
    crearParticulas(emoji) {
      const modalContent = document.querySelector('.modal-content-mascota');
      if (!modalContent) return;
      
      for (let i = 0; i < 8; i++) {
        const particula = document.createElement('div');
        particula.textContent = emoji;
        particula.style.position = 'absolute';
        particula.style.fontSize = '1.5rem';
        particula.style.pointerEvents = 'none';
        particula.style.zIndex = '9999';
        
        // Posición inicial aleatoria
        const x = Math.random() * modalContent.offsetWidth;
        const y = Math.random() * modalContent.offsetHeight;
        particula.style.left = x + 'px';
        particula.style.top = y + 'px';
        
        modalContent.appendChild(particula);
        
        // Animar partícula
        let opacity = 1;
        let posY = y;
        const animacion = setInterval(() => {
          opacity -= 0.05;
          posY -= 3;
          particula.style.opacity = opacity;
          particula.style.top = posY + 'px';
          
          if (opacity <= 0) {
            clearInterval(animacion);
            particula.remove();
          }
        }, 50);
      }
    }
    
    // Método para limpiar al destruir
    destruir() {
      if (this.intervaloDegradacion) {
        clearInterval(this.intervaloDegradacion);
      }
      this.guardarEstado();
    }
  }
  
  // Inicializar mascota cuando se carga la página
  document.addEventListener('DOMContentLoaded', () => {
    window.mascotaVirtual = new MascotaVirtual();
  });
  
  // Guardar estado antes de cerrar la página
  window.addEventListener('beforeunload', () => {
    if (window.mascotaVirtual) {
      window.mascotaVirtual.destruir();
    }
  });
  