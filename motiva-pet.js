class MotivaPet extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.estados = {
        feliz: {
          img: './assets/feliz.png',
          mensaje: '¡Estoy muy feliz de verte hoy! 🌟'
        },
        emocionada: {
          img: './assets/emocionada.png',
          mensaje: '¡Qué emoción! ¡Has hecho algo grandioso! 💥'
        },
        triste: {
          img: './assets/triste.png',
          mensaje: 'Te he extrañado... 🥺 vuelve pronto.'
        },
        dormida: {
          img: './assets/dormido.png',
          mensaje: 'Zzz... vuelvo mañana... 😴'
        },
        motivada: {
          img: './assets/motivada.png',
          mensaje: '¡Sigue así, campeón/a! 💪'
        }
      };
  
      this.estadoActual = 'feliz';
  
      this.shadowRoot.innerHTML = `
        <style>

        h2{
            color: #333;
            padding: 0;
            margin: 0;  
            margin-bottom: 10px;
        }

          .pet-container {
            text-align: center;
            background: #fffef2;
            padding: 1.5rem;
            border-radius: 1.5rem;
            box-shadow: 0 8px 18px rgba(0,0,0,0.15);
            width: 280px;
            font-family: 'Segoe UI', sans-serif;
            transition: all 0.3s ease;
            margin: 1rem auto;
          }
          

          img {
            width: 130px;
            height: auto;
            transition: transform 0.3s ease;
          }
          img:hover {
            transform: scale(1.1);
          }
          p {
            margin: 0.75rem 0;
            font-size: 1rem;
            color: #333;
          }
          button {
            background-color: #ffcb05;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 10px;
            font-size: 0.9rem;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: background 0.2s ease;
          }
          button:hover {
            background-color: #f4b400;
          }

          img {
            width: 130px;
            height: auto;
            animation: respirar 3s ease-in-out infinite;
          }
          
          @keyframes respirar {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.04); }
          }
          

        </style>
          
        <div class="pet-container">
        <h2>Tu mascota</h2>
          <img id="pet-img" src="" alt="Mascota" />
          <p id="pet-msg">Cargando estado...</p>
          <button id="alimentar-btn">🍎 Alimentar</button>
        </div>
      `;
    }
  
    static get observedAttributes() {
      return ['estado'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'estado') {
        this.actualizarEstado(newValue);
      }
    }
  
    connectedCallback() {
      const estadoAuto = this.estadoDesdeRacha();
      this.estadoActual = estadoAuto;
      this.actualizarEstado(estadoAuto);
  
      // Botón de alimentar
      const btn = this.shadowRoot.querySelector('#alimentar-btn');
      btn.addEventListener('click', () => this.alimentarMascota());
    }
  
    actualizarEstado(estado) {
      this.estadoActual = estado;
      const estadoData = this.estados[estado] || this.estados.feliz;
      this.shadowRoot.querySelector('#pet-img').src = estadoData.img;
      this.shadowRoot.querySelector('#pet-msg').textContent = estadoData.mensaje;
    }
  
    alimentarMascota() {
      const estadoAnterior = this.estadoActual;
      this.actualizarEstado('emocionada');
  
      setTimeout(() => {
        this.actualizarEstado(estadoAnterior);
      }, 3000); // vuelve al estado anterior en 3 segundos
    }
  
    estadoDesdeRacha() {
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
  
      if (racha >= 7) return "motivada";
      if (racha >= 1) return "feliz";
  
      const hora = hoy.getHours();
      if (hora >= 21 || hora <= 6) return "dormido";
      
      return "triste";
    }
  }
  
  customElements.define('motiva-pet', MotivaPet);
  