//#region IMPORTS
//#endregion IMPORTS

//#region TEMPLATE
const banner = document.createElement('template');
banner.innerHTML = /* html */ `
<style>
        @import './components/banner/style.css';
</style>
<div id="banner">
    <a id="link" href="/">
        <img id="logo" src="./assets/Big_black.svg" alt="Logo" width="120" height="32">
    </a>
    <p id="bannerText"></p>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('banner-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(banner.content.cloneNode(true));
        this.$bannerText = this._shadowRoot.querySelector('#bannerText');
    }

    // component attributes
    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        this.$bannerText.innerText = newValue;
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS