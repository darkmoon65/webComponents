import './card-tarea.css';
import templateHTML from './card-tarea.html';

class TaskItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = templateHTML; 
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

customElements.define('task-item', TaskItem);
