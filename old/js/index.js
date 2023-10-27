const orderslist = document.querySelector("#ordered");
const busyList = document.querySelector("#busy");
const doneList = document.querySelector("#done");

const generateHTML = (orders) => {
    doneList.innerHTML = "";
    busyList.innerHTML = "";
    orderslist.innerHTML = "";
    orders.map((order, i) => {
        let htmlString = "";
        if (order.status === "done") {
            htmlString = //html
                `   <div class="card w-75">
                        <section class='cards card-header'>
                            <h5>Nr. ${order.order_number}</h5>
                            <svg id="deliveryIcon${order.order_number}" class='deliveredIcon' style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C11.8 2 11.6 2.1 11.4 2.2L3.5 6.6C3.2 6.8 3 7.1 3 7.5V16.5C3 16.9 3.2 17.2 3.5 17.4L11.4 21.8C11.6 21.9 11.8 22 12 22S12.4 21.9 12.6 21.8L13.5 21.3C13.2 20.7 13.1 20 13 19.3V12.6L19 9.2V13C19.7 13 20.4 13.1 21 13.3V7.5C21 7.1 20.8 6.8 20.5 6.6L12.6 2.2C12.4 2.1 12.2 2 12 2M12 4.2L18 7.5L16 8.6L10.1 5.2L12 4.2M8.1 6.3L14 9.8L12 10.9L6 7.5L8.1 6.3M5 9.2L11 12.6V19.3L5 15.9V9.2M21.3 15.8L17.7 19.4L16.1 17.8L15 19L17.8 22L22.6 17.2L21.3 15.8Z" />
                            </svg>
                        </section>
                    <div class="card-body">
                    <h5 class="card-text">${order.person_name}</h5>
                    </div>
                </div>`;
            doneList.innerHTML += htmlString;
        } else {
            htmlString = //html
                `   <div class="card w-75">
                        <section class='cards card-header'>
                            <h5>Nr. ${order.order_number}</h5>
                        </section>
                    <div class="card-body">
                    <h5 class="card-text">${order.person_name}</h5>
                    </div>
                </div>`;
        }

        switch (order.status) {
            case "ordered":
                orderslist.innerHTML += htmlString;
                break;
            case "busy":
                busyList.innerHTML += htmlString;
                break;
        }
    });
    orders.map((order, i) => {
        if (order.status === "done") {
            document.getElementById(`deliveryIcon${order.order_number}`).addEventListener("click", (e) => {
                order.status = "delivered";

                fetch("http://192.168.30.30:2022/data/update/order/state", {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(order)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Success:", data);
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            });
        }
    });
};
fetch("http://192.168.30.30:2022/data/query/orders")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        generateHTML(data);
    });
setInterval(() => {
    fetch("http://192.168.30.30:2022/data/query/orders")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            generateHTML(data);
        });
}, 10000);