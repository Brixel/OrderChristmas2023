//#region IMPORTS
import "../components/lightrope/lightrope.js"
//#endregion IMPORTS

//#region TEMPLATE
const orderSystem = document.createElement('template');
orderSystem.innerHTML = /* html */ `
<style>
        @import './applets/style.css';
</style>
<lightrope-ɮ><lightrope-ɮ/>
`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('christmas-order-2023-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(orderSystem.content.cloneNode(true));

    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS