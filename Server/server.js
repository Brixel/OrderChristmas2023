import express from 'express';
import mongoRouter from './mongo.js';

import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

const PORT = 2023;
const APP = express();

const wss = new WebSocketServer({ port: 2024 });

// #region WEBSERVER
// ---------------------------------------
APP.use("/", express.static("../Frontend"));
APP.use("/kitchen", express.static("../Frontend"));
APP.use("/food", express.static("../Frontend"));
APP.use("/drinks", express.static("../Frontend"));
// ---------------------------------------
// #endregion
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', data => {
        wss.clients.forEach(client => {
            console.log(`distributing message: ${data}`)
            client.send(`${data}`)
        })
    })

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

/* ---ACTIVATE MIDDLEWARE--- */
APP.use(express.json());
APP.use('/mongo', mongoRouter);


APP.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});