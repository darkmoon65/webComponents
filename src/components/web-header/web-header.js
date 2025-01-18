import './web-header.css';
import templateHTML from './web-header.html';

class WebHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = templateHTML;
        const style = document.createElement('style');

        style.textContent = `
        .web_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--primary-color);
            color: var(--text-light);
            padding: 15px 24px;
          }

          .logo {
            display: flex;
            align-items: center;
          }

          .logo img {
            width: 200px;
            margin-right: 10px;
          }

          .user_info {
            display: flex;
            align-items: center;
          }

          .user_info span {
            margin-right: 10px;
          }

          .user_icon {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--tertiary-color);
            color: var(--text-dark);
            border-radius: var(--border-full);
            width: 40px;
            height: 40px;
            font-weight: bold;
            font-size:var(--font-size-m)

          }

          .logout_icon {
            margin-left: 15px;
            cursor: pointer;
          }
        `;
        this.shadowRoot.appendChild(style);

    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Manejo de eventos
        const completeButton = this.shadowRoot.querySelector('#completeButton');
        const deleteButton = this.shadowRoot.querySelector('#deleteButton');

        completeButton.addEventListener('click', () => this.markCompleted());
        deleteButton.addEventListener('click', () => this.deleteTask());
    }


}

customElements.define('web-header', WebHeader);
