import './toast-exit.css';
import templateHTML from './toast-exit.html';

class ToastExit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = templateHTML;
    const style = document.createElement('style');

    style.textContent = `

        
        .toast-exit{
          width:300px;
                    

          height:40px;
          color:var(--text-dark);
          background-color:var(--task-bg-completed);
          border-radius:var(--border-sm);
          font-weight:var(--bold);
          position:relative;
          right:0px;
          align-content:center;
        }
          p{  
          display: flex;
          justify-content:center;
          }
 
        `;
    this.shadowRoot.appendChild(style);

  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Manejo de eventos

  }


}

customElements.define('toast-exit', ToastExit);
