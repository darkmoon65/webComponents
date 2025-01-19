import templateHTML from "./modal-trash.html";

class ModalTrash extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = templateHTML;
    const style = document.createElement("style");

    style.textContent = `
        
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          width: var(--w-full);
          height: var(--h-full);
          color: var(--text-light);

        }

        .modal {
          background: var(--bg-light);
          padding: 20px;
          border-radius: var(--border-sm);
          box-shadow: var(--shadow-dark);
          width: 600px;
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: var(--gap-xs);


        }

        .modal-text{
        }
        h1 {
          font-size: 1.5rem;
          margin-bottom: var(--gap-xs);
        }

       
             
        .icon{
          display:flex;
          justify-content:center;
          flex-direction:column;
          align-items:center;
        }
        .modal_actions {
          display: flex;
          justify-content: space-around;
          gap: var(--gap-xs);
          align-items:center;
        }

        .btn {
          padding: 10px;
          border: none;
          border-radius: var(--border-full);
          font-weight: var(--bold);
          cursor: pointer;
        }

        .btn_cancel {
          width:148px;
          background: var(--task-bg-pending);
          color: var(--text-dark);
        }

        .btn_continue {
          width:148px;
          background: var(--primary-color);
          color: var(--text-light);
        }
        `;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    this.render();
  }

  render() {}

  markCompleted() {
    console.log("Tarea completada");
  }

  deleteTask() {
    console.log("Tarea eliminada");
  }
}

customElements.define("modal-trash", ModalTrash);
