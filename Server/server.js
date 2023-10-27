import express from 'express';
import { WebSocketServer } from 'ws';

const PORT = 2023;
const APP = express();
const WSS = new WebSocketServer({ port: 8080 });
const sensorData = [];

// #region WEBSERVER
// ---------------------------------------
APP.use("/christmas/kitchen", express.static("../client/kitchen"));
APP.use("/christmas/outside", express.static("../client/Stands"));
// ---------------------------------------
// #endregion


// #region REST API
// ---------------------------------------
/* ---ACTIVATE MIDDLEWARE--- */
APP.use(express.json());


/* ---ENDPOINTS--- */
APP.get("/food/items", (req, res) => {
   
});

APP.post("/food/order", (req, res) => {

});
// ---------------------------------------
// #endregion

// #region WEBSOCKETS
// ---------------------------------------
// WSS.on('connection', ws => {
//     console.log('New client connected!')
//     ws.send('connection established')

//     ws.on('close', () => {
//         console.log('Client has disconnected!')
//     })
    
//     ws.onerror =  () => {
//         console.log('websocket error')
//     }
// })
// ---------------------------------------
// #endregion


APP.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});