import './board-task.css';
import templateHTML from './board-task.html';

class BoardTask extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = templateHTML;
    const style = document.createElement('style');

    style.textContent = `
 
      .board_container{             
        margin:48px;     
        gap:60px;
        display:flex;
        flex-direction:column;
    }
      .header_container{
        display: flex; 
        justify-content:space-between;
        align-items:center;
      }
      .header_option{
        display:flex;
        gap:60px;
        align-items:center;   
      }

      .task-option{
        display:flex;
        justify-content:space-between;
        gap:25px;
      }
        `;
    this.shadowRoot.appendChild(style);

  }

  connectedCallback() {
    this.render();
  }

  render() {
    const moreHeader = this.shadowRoot.querySelector('.more_header');
    const moreOption = this.shadowRoot.querySelector('.more_option');

    moreHeader.addEventListener('click', () => {
      moreOption.style.display = moreOption.style.display === 'none' ? 'block' : 'none';
    });
  }


}

customElements.define('board-task', BoardTask);
