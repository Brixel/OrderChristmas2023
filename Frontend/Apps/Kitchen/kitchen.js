//#region IMPORTS
import "../../components/banner/banner.js";
import "../../components/card/card.js";
//#endregion IMPORTS

// const serverIP = '192.168.30.30';

//#region TEMPLATE
const home_page = document.createElement("template");
home_page.innerHTML = /* html */ `
<style>
        @import './Apps/Kitchen/style.css';
</style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
<div id="home">
    <banner-ɮ text="Kerstmart 2023: Home"></banner-ɮ>
    <section id="items">
        <div>
            <h2>Ordered</h2>
            <section class="column" id="orderedList"></section>
        </div>
        <div>
            <h2>Busy</h2>
            <section class="column" id="busyList"></section>
        </div>
        <div>
            <h2>Ready</h2>
            <section class="column" id="readyList"></section>
        </div>
    </section>
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define("kitchen-ɮ", class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(home_page.content.cloneNode(true));
        this.$orderedList = this._shadowRoot.querySelector('#orderedList');
        this.$busyList = this._shadowRoot.querySelector('#busyList');
        this.$readyList = this._shadowRoot.querySelector('#readyList');

        this._socket = new WebSocket(`ws://${window.location.hostname}:2024`);

        // Connection opened
        this._socket.addEventListener("open", (event) => {
            this.refreshScreen();
            this._socket.send("Hello Server from the kitchen crew!");
        });

        // Listen for messages
        this._socket.addEventListener("message", (event) => {
            if (event.data == "kitchenRefresh") {
                this.refreshScreen();
            }
            console.log("Message from server ", event);
        });
    }

    set content(x) {
        this.$content.innerHTML = x;
    }

    refreshScreen() {
        this.$orderedList.innerHTML = "";
        this.$busyList.innerHTML = "";
        this.$readyList.innerHTML = "";
        this.renderData(this.$orderedList, "ordered");
        this.renderData(this.$busyList, "busy");
        this.renderData(this.$readyList, "ready");
    }
    async fetchData(status) {
        try {
            const response = await fetch(`/mongo/items/${status}`);
            const data = await response.json();
            console.log(data);
            return data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async renderData(listItem, state) {
        // socket.send("hi");
        const data = await this.fetchData(state)
        if (data) {
            data.map(item => {
                const time = new Date(item.startTime);
                const templateString = `
                    <div class="item">
                        <div class="itemHeader">
                            <h2>${item.data}</h2>
                            <div class="menuControl">
                                <i id="n${item._id}" class="fas fa-arrow-left"></i>
                                <i id="p${item._id}" class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div class="itemBody">
                            <p>${time.toLocaleTimeString('nl-BE')}</p>
                        </div>
                    </div>`;
                listItem.insertAdjacentHTML("beforeend", templateString);
                this._shadowRoot.querySelector(`#n${item._id}`).addEventListener('click', async () => {
                    console.log("n", item);
                    await this.updateData(item, 'n');
                    this._socket.send('standNotifier');
                });
                this._shadowRoot.querySelector(`#p${item._id}`).addEventListener('click', async () => {
                    console.log("p", item);
                    await this.updateData(item, 'p');
                    this._socket.send('standNotifier');
                });
            });
        }
    }

    async updateData(item, position) {
        const data = {};
        data.item = item;
        data.position = position

        const rawResponse = await fetch(`/mongo/move`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const content = await rawResponse.json();
        this.$orderedList.innerHTML = "";
        this.$busyList.innerHTML = "";
        this.$readyList.innerHTML = "";
        this.renderData(this.$orderedList, "ordered");
        this.renderData(this.$busyList, "busy");
        this.renderData(this.$readyList, "ready");
        console.log(content);
    }
});
//#endregion CLASS
