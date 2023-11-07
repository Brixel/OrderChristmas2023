//#region IMPORTS
import "../../components/banner/banner.js"
import "../../components/card/card.js"
//#endregion IMPORTS


//#region TEMPLATE
const home_page = document.createElement('template');
home_page.innerHTML = /* html */ `
<style>
        @import './Apps/HotDrinks/style.css';
</style>
<div id="hotDrinks">
    <banner-ɮ text="Kerstmart 2023: Warme Dranken"></banner-ɮ>
    <div id="cards">
        <card-ɮ text="Pompoen Soep" icon="soup.svg"></card-ɮ>
        <card-ɮ text="Ajuin Soep" icon="soup.svg"></card-ɮ>
        <card-ɮ text="Kaas" icon="cheese.svg"></card-ɮ>
        <card-ɮ text="Cake" icon="cake.svg"></card-ɮ>
        <card-ɮ text="Cecemel" icon="cecemel.svg"></card-ɮ>
        <card-ɮ text="Gluhwein" icon="gluhwein.svg"></card-ɮ>
        <card-ɮ text="Koffie" icon="coffee.svg"></card-ɮ>
        <card-ɮ text="Warm Water" icon="kettle.svg"></card-ɮ>
    </div>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('hot-drinks-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(home_page.content.cloneNode(true));

        this._shadowRoot.addEventListener("btnPress",  (e) => {
            console.log(e.detail.data);
        });
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS