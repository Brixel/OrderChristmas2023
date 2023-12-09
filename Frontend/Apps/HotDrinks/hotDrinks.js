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

        this._socket = new WebSocket(`ws://${window.location.hostname}:2024`);

        this._shadowRoot.addEventListener("btnPress", async (e) => {
            const pakket = {};
            pakket.name = e.detail;
            pakket.state = "ordered";

            const rawResponse2 = await fetch(`/mongo/item/update`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pakket)
            });
            const content2 = await rawResponse2.json();
            console.log(content2);

            // console.log("e", e.detail);
            const rawResponse = await fetch(`/mongo/Order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.detail)
            });
            const content = await rawResponse.json();
            // console.log(content);
            this.updateContentBorders();
            this._socket.send('kitchenRefresh');
        });

        // Connection opened
        this._socket.addEventListener("open", (event) => {
            this._socket.send("Hello Server from the foodcorner!");
            this.updateContentBorders();
        });

        // Listen for messages
        this._socket.addEventListener("message", (event) => {
            if (event.data == "standNotifier") {
                this.updateContentBorders();
            }
        });

    }

    updateContentBorders() {
        this.$cardList.innerHTML = "";

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
                        const templateString = `<card-ɮ stand="${cardItem.stand}" text="${cardItem.cardText}" icon="${cardItem.cardIcon}" class="${cardItem.status}"></card-ɮ>`
                        this.$cardList.insertAdjacentHTML('beforeend', templateString);
                    }
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
//#endregion CLASS