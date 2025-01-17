import templateHTML from './auth-login.html';

class AuthLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = templateHTML; 
        const style = document.createElement('style');
        style.textContent = `        
            .boton_login{
                background-color: var(--background-color);
            }
        `;
        
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('auth-login', AuthLogin);
