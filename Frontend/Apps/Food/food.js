//#region IMPORTS
import "../../components/banner/banner.js"
import "../../components/card/card.js"
//#endregion IMPORTS

const serverIP = 'localhost'

//#region TEMPLATE
const home_page = document.createElement('template');
home_page.innerHTML = /* html */ `
<style>
        @import './Apps/Food/style.css';
</style>
<div id="food">
    <banner-ɮ text="Kerstmart 2023: Warm Eten"></banner-ɮ>
    <div id="cards"></div>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('food-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(home_page.content.cloneNode(true));
        this.$cardList = this._shadowRoot.querySelector("#cards");

        fetch(`http://${serverIP}:2023/mongo/consumables`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
            // console.log(data);
            data.map(cardItem => {
                if (cardItem.stand=="food") {
                    const templateString = `<card-ɮ stand="${cardItem.stand}" text="${cardItem.cardText}" icon="${cardItem.cardIcon}"></card-ɮ>`
                    this.$cardList.insertAdjacentHTML('beforeend', templateString);
                }
            });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

        this._shadowRoot.addEventListener("btnPress", async (e) => {
            console.log(e.detail);
            const rawResponse = await fetch(`http://${serverIP}:2023/mongo/Order`, {
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