//#region IMPORTS
//#endregion IMPORTS

//#region TEMPLATE

const card_template = document.createElement('template');
card_template.innerHTML = /* html */ `

<style>
        @import './components/card/style.css';
</style>
<div id="card">
    <img id="image">
    <p id="card-text"></p>
</div>
`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('card-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(card_template.content.cloneNode(true));

        this.$card = this._shadowRoot.querySelector('#card-text');
        this.$image = this._shadowRoot.querySelector('#image');

        this.$card.addEventListener('click', () => {
            this.btnPressedEvent = new CustomEvent("btnPress", {
                detail:{
                    data:this.$card.value
                },
                bubbles: true,
                cancelable: false,
                composed: true
            });
            this.dispatchEvent(this.btnPressedEvent);
        });
    }
    // component attributes
    static get observedAttributes() {
        return ['text','icon'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        let path = "../../Assets/"
        switch (property) {
            case 'text':
                if (oldValue === newValue) return;
                this.$card.innerText = newValue;
            break;
            case 'icon':
                if (oldValue === newValue) return;
                this.$image.src = path + newValue;
            break;
        
            default:
                break;
        }
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS