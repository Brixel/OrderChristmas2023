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
        Stands
    </div>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('stands-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(home_page.content.cloneNode(true));

        this._shadowRoot.addEventListener("btnPress",  (e) => {
            console.log('Capture button pressed');
            console.log(e.detail.data);
        });
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS