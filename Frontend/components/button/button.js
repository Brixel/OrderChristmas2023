//#region IMPORTS
//#endregion IMPORTS

//#region TEMPLATE

const button_template = document.createElement('template');
button_template.innerHTML = /* html */ `

<style>
        @import './components/button/style.css';
</style>
<input class='button' type="button"></input>
`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('button-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(button_template.content.cloneNode(true));

        this.$button = this._shadowRoot.querySelector('.button');
        this.$button.addEventListener('click', () => {
            this.btnPressedEvent = new CustomEvent("btnPress", {
                detail:{
                    data:this.$button.value
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
        return ['page'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        // this[ property ] = newValue;
        this.$button.value = newValue;
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS