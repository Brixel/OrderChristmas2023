//#region IMPORTS
import "../../Apps/Home/home.js"
import "../../Apps/Kitchen/kitchen.js"
import "../../Apps/Food/food.js"
import "../../Apps/HotDrinks/hotDrinks.js"
//#endregion IMPORTS


//#region TEMPLATE
const router = document.createElement('template');
router.innerHTML = /* html */ `
<div id="router">
    <home-page-ɮ id='homeComponent'></home-page-ɮ>
    <kitchen-ɮ id='kitchenComponent'></kitchen-ɮ>
    <food-ɮ id='foodComponent'></food-ɮ>
    <hot-drinks-ɮ id='drinksComponent'></hot-drinks-ɮ>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('router-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(router.content.cloneNode(true));

        this.$homePage = this._shadowRoot.querySelector('#homeComponent');
        this.$kitchenPage = this._shadowRoot.querySelector('#kitchenComponent');
        this.$foodPage = this._shadowRoot.querySelector('#drinksComponent');
        this.$drinksPage = this._shadowRoot.querySelector('#foodComponent');
        
        let urlPath = window.location.pathname;
        this.hidePages();
        
        switch (urlPath) {
            case '/kitchen/':
                this.$kitchenPage.style.display = "initial";
            break;
            case '/food/':
                this.$foodPage.style.display = "initial";
            break;
            case '/drinks/':
                this.$drinksPage.style.display = "initial";
            break;
            default:
                this.$homePage.style.display = "initial";
            break;
        }
    }

    hidePages(){
        this.$kitchenPage.style.display = "none";
        this.$foodPage.style.display = "none";
        this.$drinksPage.style.display = "none";
        this.$homePage.style.display = "none";
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS