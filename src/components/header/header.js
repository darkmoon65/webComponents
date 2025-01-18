import './header.css';
import templateHTML from './header.html';

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = templateHTML;
        const style = document.createElement('style');

        style.textContent = `
        
        .card_task{
            background: var(--bg-dark);
            color: var(--text-light);
            border-radius:var(--border-sm);
            padding: 16px;
            
        }

        .header_card{
            display: flex;
            justify-content: space-between;
            align-items:center;
        }

        card_task p{
            overflow: hidden;
        }


        #complete_button{
            background: var(--task-bg-completed);
            border:none;
            border-radius:var(--border-full);
            font-weight:bold;  
            padding: 8px;  
            height: 32px;

        }

        #pendient_button{ 
            background: var(--task-bg-pending);
            border:none;
            border-radius:var(--border-full);
            font-weight:bold;  
            padding: 8px;  
            height: 32px;

        }

        #task_description{
            background: var(--bg-dark-t);
            padding:16px;
            border-radius:var(--border-sm);
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

customElements.define('header', Header);
