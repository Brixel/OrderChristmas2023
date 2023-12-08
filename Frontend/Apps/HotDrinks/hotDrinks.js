//#region IMPORTS
import "../../components/banner/banner.js"
import "../../components/card/card.js"
//#endregion IMPORTS

// const serverIP = '192.168.30.30'

//#region TEMPLATE
const home_page = document.createElement('template');
home_page.innerHTML = /* html */ `
<style>
        @import './Apps/HotDrinks/style.css';
</style>
<div id="hotDrinks">
    <banner-ɮ text="Kerstmart 2023: Warme Dranken"></banner-ɮ>
    <div id="cards"></div>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('hot-drinks-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(home_page.content.cloneNode(true));
        this.$cardList = this._shadowRoot.querySelector("#cards");

        fetch(`/mongo/consumables`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                data.map(cardItem => {
                    if (cardItem.stand == "drinks") {
                        const templateString = `<card-ɮ text="${cardItem.cardText}" icon="${cardItem.cardIcon}"></card-ɮ>`
                        this.$cardList.insertAdjacentHTML('beforeend', templateString);
                    }
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        this._shadowRoot.addEventListener("btnPress", async (e) => {
            console.log(e.detail);
            const rawResponse = await fetch(`/mongo/Order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.detail)
            });
            const content = await rawResponse.json();
            console.log(content);
        });
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
//#endregion CLASS