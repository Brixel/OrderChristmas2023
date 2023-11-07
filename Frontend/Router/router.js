//#region IMPORTS
import "../../Apps/Home/home.js"
import "../../Apps/Kitchen/kitchen.js"
import "../../Apps/Stands/stands.js"
//#endregion IMPORTS


//#region TEMPLATE
const router = document.createElement('template');
router.innerHTML = /* html */ `
<div id="router">
    <home-page-ɮ id='homeComponent'></home-page-ɮ>
    <kitchen-ɮ id='kitchenComponent'></kitchen-ɮ>
    <stands-ɮ id='standsComponent'></stands-ɮ>
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
        this.$standsPage = this._shadowRoot.querySelector('#standsComponent');
        
        let urlPath = window.location.pathname;
        this.hidePages();
        
        switch (urlPath) {
            case '/kitchen/':
                this.$kitchenPage.style.display = "initial";
            break;
            case '/stands/':
                this.$standsPage.style.display = "initial";
            break;
            default:
                this.$homePage.style.display = "initial";
            break;
        }
    }

    hidePages(){
        console.log("triggered!")
        this.$kitchenPage.style.display = "none";
        this.$standsPage.style.display = "none";
        this.$homePage.style.display = "none";
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS