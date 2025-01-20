import "./task-form.css";
import templateHTML from "./task-form.html";

class TaskForm extends HTMLElement {
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
        }
        #task_modal {
          display: none;
        }
        .task_creation {
          position: absolute;
          top: 200px;
          z-index: 10;
          background: #b75454;
          padding: 20px;
          border-radius: var(--border-sm);
          box-shadow: var(--shadow-dark);
          width: 600px;
          color:var(--text-light)
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
          font-family: var(--font-family);
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
          font-family: var(--font-family);
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
          color: var(--text-dark);
          font-weight: var(--bold);
        }

        .form_actions {
          display: flex;
          gap: var(--gap-xs);
          justify-content: space-around;
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

        .btn_create {
          background: var(--primary-color);
          color: var(--text-light);
          width:148px;

          }

        `;
    this.shadowRoot.appendChild(style);
    this.create = this.create.bind(this);
    this.close = this.close.bind(this);
  }

  connectedCallback() {
    document.addEventListener("toggle-modal", () => {
      const modal = this.shadowRoot.querySelector("#task_modal");
      modal.style.display = "block";
    });
    this.render();
  }

  render() {
    const cancelBtn = this.shadowRoot.querySelector("#btn_cancel");
    const formCreate = this.shadowRoot.querySelector("#form_create");

    formCreate.addEventListener("submit", this.create);
    cancelBtn.addEventListener("click", () => this.close());

    document.addEventListener("open-edit", (event) => {
      const { id, titulo, descripcion } = event.detail;
      const editModal = this.shadowRoot.querySelector("#task_modal");
    });
  }

  create(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const titulo = formData.get("titulo");
    const descripcion = formData.get("descripcion");

    console.log({ titulo, descripcion });
    const notas = JSON.parse(localStorage.getItem("notas")) || [];

    const newNote = {
      id: Date.now(),
      titulo,
      descripcion,
      completada: false,
    };

    notas.push(newNote);

    localStorage.setItem("notas", JSON.stringify(notas));
    const createEvent = new CustomEvent("create-task", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(createEvent);

    const toastEvent = new CustomEvent("open-toast", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(toastEvent);

    this.close();
  }

  close() {
    const modal = this.shadowRoot.querySelector("#task_modal");
    modal.style.display = "none";
  }
}

customElements.define("task-form", TaskForm);
