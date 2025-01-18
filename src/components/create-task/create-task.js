import './create-task.css';
import templateHTML from './create-task.html';

class CreateTask extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = templateHTML;
    const style = document.createElement('style');

    style.textContent = `

        
        .btn {
          padding: 10px;
          border: none;
          border-radius: var(--border-full);
          font-weight: var(--bold);
          cursor: pointer;
        }
 
        .btn_create {
          background: var(--tertiary-color);
          color: var(--text-dark);
          font-size:var(--font-size-m)
        }
 
        `;
    this.shadowRoot.appendChild(style);

  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Manejo de eventos
    const filterHeader = this.shadowRoot.querySelector('.filter_header');
    const filterOption = this.shadowRoot.querySelector('.filter_option');

    filterHeader.addEventListener('click', () => {
      filterOption.style.display = filterOption.style.display === 'none' ? 'block' : 'none';
    });
  }


}

customElements.define('create-task', CreateTask);
