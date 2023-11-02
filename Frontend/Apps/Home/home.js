//#region IMPORTS
import "../../components/banner/banner.js"
import "../../components/card/card.js"
//#endregion IMPORTS


//#region TEMPLATE
const home_page = document.createElement('template');
home_page.innerHTML = /* html */ `
<style>
        @import './Apps/Home/style.css';
</style>
<div id="home">
    <banner-ɮ text="Kerstmart 2023: Home"></banner-ɮ>
    <div id="cards">
        <card-ɮ text="Keuken" icon="kitchen.svg"></card-ɮ>
        <card-ɮ text="Standen" icon="stand.svg"></card-ɮ>
    </div>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('home-page-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(home_page.content.cloneNode(true));
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS