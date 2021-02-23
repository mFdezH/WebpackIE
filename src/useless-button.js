

class UslessButton extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
         <div>
            <button>Click aqui</button>
        </div>`
    }
}

customElements.define('useless-button', UslessButton);