//#region IMPORTS
// import "../components/lightrope/lightrope.js"
// import "../components/christmas_tree/christmas_tree.js"
//#endregion IMPORTS

//#region TEMPLATE
const orderSystem = document.createElement('template');
orderSystem.innerHTML = 
/* html */ `
Dit word nog extra bullshit
`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('order-2023-ɮ', class extends HTMLElement {
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