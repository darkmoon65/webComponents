import "./task-item.css";
import templateHTML from "./task-item.html";

class TaskItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = templateHTML;
    const style = document.createElement("style");

    style.textContent = `
        .container{
            display: flex;
            gap: 10px;
            width: 100%;
        }
        .card_task{
            background: var(--bg-dark);
            color: var(--text-light);
            border-radius:var(--border-sm);
            padding: 16px;
            margin-bottom: 10px;
            width: 100%;
        }

        .header_card{
            display: flex;
            justify-content: space-between;
            align-items:center;
        }

        card_task p{
            overflow: hidden;
        }


        #complete_btn{
            background: var(--task-bg-completed);
            border:none;
            border-radius:var(--border-full);
            font-weight:bold;  
            padding: 8px;  
            height: 32px;

        }

        #pending_btn{ 
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

        .header_card img{
            cursor:pointer;
        }

        @media  (min-width: 844px){
        
        }




        `;
    this.shadowRoot.appendChild(style);
    this.deleteTask = this.deleteTask.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const titulo = this.getAttribute("titulo") || "Sin título";
    const descripcion = this.getAttribute("descripcion") || "Sin descripción";

    this.shadowRoot.querySelector("#task_title").textContent = titulo;
    this.shadowRoot.querySelector("#task_description").textContent =
      descripcion;

    const task = this.shadowRoot.querySelector(".container");
    task.addEventListener("delete", this.deleteTask);
  }

  markCompleted() {
    console.log("Tarea completada");
  }

  deleteTask() {
    console.log("Tarea eliminada:", this.getAttribute("titulo"));
    const deleteEvent = new CustomEvent("delete-task", {
      detail: { id: this.getAttribute("id") },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(deleteEvent);
  }
}

customElements.define("task-item", TaskItem);
