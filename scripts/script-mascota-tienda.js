// Sistema de Tienda de Mascotas
class TiendaMascotas {
    constructor() {
        this.mascotas = [
            {
                id: 'gato',
                nombre: 'Gato Místico',
                emoji: '🐱',
                precio: 50,
                rareza: 'común',
                descripcion: 'Un gato sabio que te acompaña en tu viaje espiritual',
                animacion: 'bounce'
            },
            {
                id: 'perro',
                nombre: 'Perro Guardián',
                emoji: '🐕',
                precio: 75,
                rareza: 'común',
                descripcion: 'Un leal compañero que protege tu energía positiva',
                animacion: 'wiggle'
            },
            {
                id: 'dragon',
                nombre: 'Dragón Cósmico',
                emoji: '🐉',
                precio: 200,
                rareza: 'épico',
                descripcion: 'Un poderoso dragón que amplifica tu sabiduría',
                animacion: 'float'
            },
            {
                id: 'unicornio',
                nombre: 'Unicornio Celestial',
                emoji: '🦄',
                precio: 300,
                rareza: 'legendario',
                descripcion: 'Un ser mágico que trae pureza y luz a tu alma',
                animacion: 'sparkle'
            },
            {
                id: 'phoenix',
                nombre: 'Fénix Renaciente',
                emoji: '🔥',
                precio: 500,
                rareza: 'mítico',
                descripcion: 'Ave legendaria que simboliza la renovación constante',
                animacion: 'flame'
            },
            {
                id: 'buho',
                nombre: 'Búho Sabio',
                emoji: '🦉',
                precio: 120,
                rareza: 'raro',
                descripcion: 'Guardián de la sabiduría nocturna y los secretos',
                animacion: 'sway'
            },
            {
                id: 'mariposa',
                nombre: 'Mariposa Transformadora',
                emoji: '🦋',
                precio: 80,
                rareza: 'común',
                descripcion: 'Símbolo de transformación y crecimiento personal',
                animacion: 'flutter'
            },
            {
                id: 'lobo',
                nombre: 'Lobo Espiritual',
                emoji: '🐺',
                precio: 150,
                rareza: 'raro',
                descripcion: 'Guía espiritual que te conecta con tu intuición',
                animacion: 'howl'
            }
        ];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadMascotaActiva();
        this.actualizarSaldo();
    }
    
    setupEventListeners() {
        // Botón para abrir tienda
        document.getElementById('abrir-tienda-mascotas').addEventListener('click', () => {
            this.abrirTienda();
        });
        
        // Botón para cerrar tienda
        document.getElementById('cerrar-modal-tienda').addEventListener('click', () => {
            this.cerrarTienda();
        });
        
        // Cerrar modal haciendo clic fuera
        document.getElementById('modal-tienda-mascotas').addEventListener('click', (e) => {
            if (e.target.id === 'modal-tienda-mascotas') {
                this.cerrarTienda();
            }
        });
        
        // Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.cambiarTab(btn.dataset.tab);
            });
        });
        
        // Escuchar cambios en las monedas
        this.observarMonedas();
    }
    
    abrirTienda() {
        document.getElementById('modal-tienda-mascotas').style.display = 'flex';
        this.cargarMascotasDisponibles();
        this.cargarInventario();
        this.actualizarSaldo();
        this.animarApertura();
    }
    
    cerrarTienda() {
        document.getElementById('modal-tienda-mascotas').style.display = 'none';
    }
    
    cambiarTab(tab) {
        // Actualizar botones
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
        
        // Actualizar contenido
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`tab-${tab}`).classList.add('active');
        
        // Cargar contenido según tab
        if (tab === 'comprar') {
            this.cargarMascotasDisponibles();
        } else if (tab === 'inventario') {
            this.cargarInventario();
        }
    }
    
    cargarMascotasDisponibles() {
        const container = document.getElementById('mascotas-disponibles');
        const mascotasCompradas = this.getMascotasCompradas();
        
        container.innerHTML = '';
        
        this.mascotas.forEach(mascota => {
            const yaComprada = mascotasCompradas.includes(mascota.id);
            const card = this.crearCardMascota(mascota, 'comprar', yaComprada);
            container.appendChild(card);
        });
    }
    
    cargarInventario() {
        const container = document.getElementById('mascotas-inventario');
        const mascotasCompradas = this.getMascotasCompradas();
        const mascotaActiva = this.getMascotaActiva();
        
        container.innerHTML = '';
        
        if (mascotasCompradas.length === 0) {
            container.innerHTML = `
                <div class="inventario-vacio">
                    <div class="vacio-icon">🐾</div>
                    <h3>¡Tu inventario está vacío!</h3>
                    <p>Compra tu primera mascota para comenzar tu aventura</p>
                </div>
            `;
            return;
        }
        
        mascotasCompradas.forEach(mascotaId => {
            const mascota = this.mascotas.find(m => m.id === mascotaId);
            if (mascota) {
                const esActiva = mascotaActiva === mascotaId;
                const card = this.crearCardMascota(mascota, 'inventario', false, esActiva);
                container.appendChild(card);
            }
        });
    }
    
    crearCardMascota(mascota, tipo, yaComprada = false, esActiva = false) {
        const card = document.createElement('div');
        card.className = `mascota-card ${mascota.rareza} ${yaComprada ? 'comprada' : ''} ${esActiva ? 'activa' : ''}`;
        
        let buttonContent = '';
        if (tipo === 'comprar') {
            if (yaComprada) {
                buttonContent = '<button class="btn-comprado" disabled>✅ Comprada</button>';
            } else {
                buttonContent = `<button class="btn-comprar" onclick="tiendaMascotas.comprarMascota('${mascota.id}')">💰 ${mascota.precio} monedas</button>`;
            }
        } else if (tipo === 'inventario') {
            if (esActiva) {
                buttonContent = '<button class="btn-activa" disabled>⭐ Activa</button>';
            } else {
                buttonContent = `<button class="btn-seleccionar" onclick="tiendaMascotas.seleccionarMascota('${mascota.id}')">Seleccionar</button>`;
            }
        }
        
        card.innerHTML = `
            <div class="mascota-sprite ${mascota.animacion}">
                ${mascota.emoji}
            </div>
            <div class="mascota-info">
                <h3 class="mascota-nombre">${mascota.nombre}</h3>
                <div class="mascota-rareza rareza-${mascota.rareza}">
                    ${this.getRarezaIcon(mascota.rareza)} ${mascota.rareza.toUpperCase()}
                </div>
                <p class="mascota-descripcion">${mascota.descripcion}</p>
                <div class="mascota-actions">
                    ${buttonContent}
                </div>
            </div>
        `;
        
        return card;
    }
    
    getRarezaIcon(rareza) {
        const icons = {
            'común': '⚪',
            'raro': '🔵',
            'épico': '🟣',
            'legendario': '🟡',
            'mítico': '🔴'
        };
        return icons[rareza] || '⚪';
    }
    
    comprarMascota(mascotaId) {
        const mascota = this.mascotas.find(m => m.id === mascotaId);
        if (!mascota) return;
        
        const monedas = this.getMonedas();
        if (monedas < mascota.precio) {
            this.mostrarMensaje('❌ No tienes suficientes monedas', 'error');
            return;
        }
        
        // Deducir monedas
        this.setMonedas(monedas - mascota.precio);
        
        // Agregar al inventario
        const mascotasCompradas = this.getMascotasCompradas();
        mascotasCompradas.push(mascotaId);
        this.setMascotasCompradas(mascotasCompradas);
        
        // Si es la primera mascota, hacerla activa
        if (mascotasCompradas.length === 1) {
            this.setMascotaActiva(mascotaId);
            this.mostrarMascotaActiva();
        }
        
        // Actualizar interfaz
        this.actualizarSaldo();
        this.cargarMascotasDisponibles();
        this.cargarInventario();
        
        // Efectos
        this.celebrarCompra(mascota);
        this.mostrarMensaje(`🎉 ¡Has adoptado a ${mascota.nombre}!`, 'success');
    }
    
    seleccionarMascota(mascotaId) {
        this.setMascotaActiva(mascotaId);
        this.mostrarMascotaActiva();
        this.cargarInventario();
        
        const mascota = this.mascotas.find(m => m.id === mascotaId);
        this.mostrarMensaje(`⭐ ${mascota.nombre} ahora te acompaña`, 'info');
    }
    
    loadMascotaActiva() {
        // La mascota activa ahora solo se muestra en el modal
        // No necesitamos mostrar una mascota flotante
    }
    
    celebrarCompra(mascota) {
        this.crearParticulas(mascota.emoji);
        this.reproducirSonido('compra');
    }
    
    crearParticulas(emoji) {
        const container = document.body;
        for (let i = 0; i < 10; i++) {
            const particula = document.createElement('div');
            particula.className = 'particula-celebracion';
            particula.textContent = emoji;
            particula.style.left = Math.random() * 100 + 'vw';
            particula.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(particula);
            
            setTimeout(() => {
                particula.remove();
            }, 3000);
        }
    }
    
    reproducirSonido(tipo) {
        // Implementar sonidos si es necesario
        try {
            const audio = new Audio();
            if (tipo === 'compra') {
                // Sonido de compra usando Web Audio API
                this.playBuySound();
            }
        } catch (e) {
            console.log('Audio no disponible');
        }
    }
    
    playBuySound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            console.log('Web Audio API no disponible');
        }
    }
    
    mostrarMensaje(texto, tipo) {
        const mensaje = document.createElement('div');
        mensaje.className = `mensaje-flotante ${tipo}`;
        mensaje.textContent = texto;
        
        document.body.appendChild(mensaje);
        
        setTimeout(() => {
            mensaje.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            mensaje.classList.remove('show');
            setTimeout(() => {
                mensaje.remove();
            }, 300);
        }, 3000);
    }
    
    animarApertura() {
        const modal = document.getElementById('modal-tienda-mascotas');
        modal.classList.add('modal-open');
        
        setTimeout(() => {
            modal.classList.remove('modal-open');
        }, 500);
    }
    
    // Gestión de datos
    getMonedas() {
        return parseInt(localStorage.getItem('monedas') || '0');
    }
    
    setMonedas(cantidad) {
        localStorage.setItem('monedas', cantidad.toString());
        this.actualizarSaldo();
        this.actualizarMonedasPrincipal();
    }
    
    getMascotasCompradas() {
        return JSON.parse(localStorage.getItem('mascotasCompradas') || '[]');
    }
    
    setMascotasCompradas(mascotas) {
        localStorage.setItem('mascotasCompradas', JSON.stringify(mascotas));
    }
    
    getMascotaActiva() {
        return localStorage.getItem('mascotaActiva');
    }
    
    setMascotaActiva(mascotaId) {
        localStorage.setItem('mascotaActiva', mascotaId);
    }
    
    actualizarSaldo() {
        const saldo = document.getElementById('saldo-monedas');
        if (saldo) {
            saldo.textContent = `💰 Monedas: ${this.getMonedas()}`;
        }
    }
    
    actualizarMonedasPrincipal() {
        const monedas = document.getElementById('monedas');
        if (monedas) {
            monedas.textContent = `💰 Monedas: ${this.getMonedas()}`;
        }
    }
    
    observarMonedas() {
        // Observar cambios en el localStorage para las monedas
        const originalSetItem = localStorage.setItem;
        const self = this;
        
        localStorage.setItem = function(key, value) {
            originalSetItem.apply(this, arguments);
            if (key === 'monedas') {
                self.actualizarSaldo();
            }
        };
        
        // También observar el elemento de monedas principal
        const observer = new MutationObserver(() => {
            this.actualizarSaldo();
        });
        
        const monedasElement = document.getElementById('monedas');
        if (monedasElement) {
            observer.observe(monedasElement, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }
    }
}

// Inicializar tienda cuando se carga la página
let tiendaMascotas;
document.addEventListener('DOMContentLoaded', () => {
    tiendaMascotas = new TiendaMascotas();
});

// Función para dar monedas (para testing)
function darMonedas(cantidad) {
    const monedasActuales = tiendaMascotas.getMonedas();
    tiendaMascotas.setMonedas(monedasActuales + cantidad);
}