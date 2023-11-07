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
        <card-ɮ text="Pompoen Soep (Vegan)" icon="kitchen2.svg"></card-ɮ>
        <card-ɮ text="Ajuin Soep" icon="drink.svg"></card-ɮ>
        <card-ɮ text="Kaas" icon="food.svg"></card-ɮ>
        <card-ɮ text="Cake" icon="kitchen2.svg"></card-ɮ>
        <card-ɮ text="Cecemel" icon="drink.svg"></card-ɮ>
        <card-ɮ text="Gluhwein" icon="food.svg"></card-ɮ>
        <card-ɮ text="Koffie" icon="kitchen2.svg"></card-ɮ>
        <card-ɮ text="Warm Water" icon="drink.svg"></card-ɮ>
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