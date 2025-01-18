import './task-form.css';
import templateHTML from './task-form.html';

class TaskForm extends HTMLElement {
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
          background: var(--gradient-color);
          color: var(--text-dark);
        }

        .task_creation {
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

        .form {
          display: flex;
          flex-direction: column;
          gap: var(--gap-xs);
        }

        .form_group {
          display: flex;
          flex-direction: column;
        }

        label {
          font-weight: var(--bold);
          margin-bottom: 5px;
        }

        input, textarea {
          border: 1px solid var(--text-dark);
          border-radius: var(--border-sm);
          padding: 10px;
          font-size: var(--font-size-base);
        }

        textarea {
          resize: none;
          height: 100px;
        }

        .status {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .status_badge {
          background: var(--task-bg-pending);
          padding: 5px 10px;
          border-radius: var(--border-sm);
          color: var(--text-light);
          font-weight: var(--bold);
        }

        .form_actions {
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

        .btn_create {
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

customElements.define('task-form', TaskForm);
