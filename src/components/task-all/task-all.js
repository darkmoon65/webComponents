import './task-all.css';
import templateHTML from './task-all.html';

class TaskAll extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = templateHTML;
    const style = document.createElement('style');

    style.textContent = `

        .all_container{
            color:var(--text-light);
            font-size:var(--font-size-m);
            font-weight: bold;
            display:flex;

        }

        .all_header{
            display:flex;
            align-items:center;
            gap: 10px;

        }
        .all_header .icon{
            cursor:pointer;
            width:30px;
            height:30px;
            background:var(--text-light);
            border-radius:var(--border-full)
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

customElements.define('task-all', TaskAll);
