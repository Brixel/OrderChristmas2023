//#region IMPORTS
import "../../components/banner/banner.js";
import "../../components/card/card.js";
//#endregion IMPORTS

const serverIP = 'localhost';

//#region TEMPLATE
const home_page = document.createElement("template");
home_page.innerHTML = /* html */ `
<style>
        @import './Apps/Kitchen/style.css';
</style>
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
        
        this.renderData(this.$orderedList,"ordered");
        this.renderData(this.$busyList,"busy");
    }

    set content(x) {
        this.$content.innerHTML = x;
    }

    async fetchData(status) {
        try {
            const response = await fetch(`http://${serverIP}:2023/mongo/items/${status}`);
            const data = await response.json();
            console.log(data);
            return data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
    async renderData(listItem,state) {
        const data = await this.fetchData(state)
            if (data) {
                data.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('item');
                    itemDiv.textContent = `${item.data}`;
                    listItem.appendChild(itemDiv);
                });
            }
        }
}
);
//#endregion CLASS
