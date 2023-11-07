//#region IMPORTS
import "../../components/banner/banner.js"
import "../../components/card/card.js"
//#endregion IMPORTS


//#region TEMPLATE
const home_page = document.createElement('template');
home_page.innerHTML = /* html */ `
<style>
        @import './Apps/Food/style.css';
</style>
<div id="food">
    <banner-ɮ text="Kerstmart 2023: Warm Eten"></banner-ɮ>
    <div id="cards">
        <card-ɮ text="Pasta 1" icon="spaghetti.svg"></card-ɮ>
        <card-ɮ text="Pasta 2" icon="spaghetti.svg"></card-ɮ>
        <card-ɮ text="Pasta (Vegan)" icon="spaghetti.svg"></card-ɮ>
        <card-ɮ text="Saus 1" icon="sauce.svg"></card-ɮ>
        <card-ɮ text="Saus 2 (Vegan)" icon="sauce.svg"></card-ɮ>
        <card-ɮ text="Kaas" icon="cheese.svg"></card-ɮ>
        <card-ɮ text="Hotdog" icon="hotdog.svg"></card-ɮ>
        <card-ɮ text="Hotdog (Vegan)" icon="hotdog.svg"></card-ɮ>
        <card-ɮ text="Broodjes 1" icon="bread.svg"></card-ɮ>
        <card-ɮ text="Broodjes 2" icon="bread.svg"></card-ɮ>
        <card-ɮ text="Extra 1" icon="jar.svg"></card-ɮ>
        <card-ɮ text="Extra 2" icon="jar.svg"></card-ɮ>
    </div>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('food-ɮ', class extends HTMLElement {
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