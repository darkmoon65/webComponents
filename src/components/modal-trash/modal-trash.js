import './modal-trash.css';
import templateHTML from './modal-trash.html';

class ModalTrash extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = templateHTML;
    const style = document.createElement('style');

    style.textContent = `
        
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          width: var(--w-full);
          height: var(--h-full);
        }

        .modal {
          background: var(--bg-light);
          padding: 20px;
          border-radius: var(--border-sm);
          box-shadow: var(--shadow-dark);
          width: 600px;
        }

        h1 {
          font-size: 1.5rem;
          margin-bottom: var(--gap-xs);
          text-align: center;
        }

        .modal {
          display: flex;
          flex-direction: column;
          gap: var(--gap-xs);
        }

             
        .icon{
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center
        }
        .modal_actions {
          display: flex;
          justify-content: space-between;
          gap: var(--gap-xs);
        }

        .btn {
          padding: 10px;
          border: none;
          border-radius: var(--border-full);
          font-weight: var(--bold);
          cursor: pointer;
        }

        .btn_cancel {
          background: var(--task-bg-pending);
          color: var(--text-light);
        }

        .btn_continue {
          background: var(--primary-color);
          color: var(--text-light);
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

  markCompleted() {
    console.log('Tarea completada');
  }

  deleteTask() {
    console.log('Tarea eliminada');
  }
}

customElements.define('modal-trash', ModalTrash);
