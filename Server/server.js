import express from 'express';
import mongoRouter from './mongo.js';

const PORT = 2023;
const APP = express();

// #region WEBSERVER
// ---------------------------------------
APP.use("/", express.static("../Frontend"));
APP.use("/kitchen", express.static("../Frontend"));
APP.use("/food", express.static("../Frontend"));
APP.use("/drinks", express.static("../Frontend"));
// ---------------------------------------
// #endregion

/* ---ACTIVATE MIDDLEWARE--- */
APP.use(express.json());
APP.use('/mongo', mongoRouter);


APP.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});