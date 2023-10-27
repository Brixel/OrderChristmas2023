const X = require('express');
const GO = X.Router();
const { MongoClient } = require("mongodb");
const URI = "mongodb://127.0.0.1/";
const CLIENT = new MongoClient(URI);
const DB = CLIENT.db('swarmiot').collection('JaarmarktLora2023');

//#region // WORKER METHODS //
const testConnection = async () => {
    await CLIENT.connect();
    await CLIENT.db("admin").command({ ping: 1 }); // might fix client not connected bug
    return "Service is alive";
}

const findEntries = async () => {
    await CLIENT.connect();
    await CLIENT.db("admin").command({ ping: 1 });
    const findResult = await DB.find({ "machine-id": { "$exists": true } }).toArray();
    return findResult;
}

const findEntry = async () => {
    await CLIENT.connect();
    await CLIENT.db("admin").command({ ping: 1 });
    let data = [];
    let nodes = await DB.distinct('machine-id');
    for (let i = 0; i < nodes.length; i++) {
       const iotNodeResult = await DB.find({ "machine-id": nodes[i] }).limit(1).sort({ $natural: -1 }).toArray();
       await data.push(iotNodeResult); 
    }

    
    //db.collection.find().limit(1).sort({$natural:-1}) 
    // const iotNodeResult1 = await DB.find({ "machine-id": "SwarmIOT1" }).limit(1).sort({ $natural: -1 }).toArray();
    // await data.push(iotNodeResult1);

    // const iotNodeResult2 = await DB.find({ "machine-id": "SwarmIOT3" }).limit(1).sort({ $natural: -1 }).toArray();
    // await data.push(iotNodeResult2);

    // const iotNodeResult3 = await DB.find({ "machine-id": "SwarmIOT4" }).limit(1).sort({ $natural: -1 }).toArray();
    // await data.push(iotNodeResult3);

    return data;
}

const findlastHundredEntries = async () => {
    await CLIENT.connect();
    await CLIENT.db("admin").command({ ping: 1 });
    let data = [];
    let nodes = await DB.distinct('machine-id');
    for (let i = 0; i < nodes.length; i++) {
       const iotNodeResult = await DB.find({ "machine-id": nodes[i] }).limit(100).sort({ $natural: -1 }).toArray();
       await data.push(iotNodeResult); 
    }
    //db.collection.find().limit(1).sort({$natural:-1}) 
    // const iotNodeResult1 = await DB.find({ "machine-id": "SwarmIOT1" }).limit(100).sort({ $natural: -1 }).toArray();
    // await data.push(iotNodeResult1);

    // const iotNodeResult2 = await DB.find({ "machine-id": "SwarmIOT3" }).limit(100).sort({ $natural: -1 }).toArray();
    // await data.push(iotNodeResult2);

    // const iotNodeResult3 = await DB.find({ "machine-id": "SwarmIOT4" }).limit(100).sort({ $natural: -1 }).toArray();
    // await data.push(iotNodeResult3);

    return data;
}

const insertEntry = async (value) => {
    await CLIENT.connect();
    await CLIENT.db("admin").command({ ping: 1 });
    const insertResult = await DB.insertMany([value]);
    return insertResult;
}
//#endregion

//#region // ROUTER END POINTS //
GO.route('/ping')
    .get((req, res) => {
        testConnection()
            .then((x) => {res.send(x)})
            .catch(console.error)
            .finally(() => CLIENT.close());
    })

GO.route('/query/all')
    .get(X.json(), (req, res) => {
        findEntries()
            .then((x) => {res.send(x)})
            .catch(console.error)
            .finally(() => CLIENT.close());
    });

GO.route('/query/last')
    .get(X.json(), (req, res) => {
        findEntry()
            .then((x) => {res.send(x)})
            .catch(console.error)
            .finally(() => CLIENT.close());
    });

GO.route('/query/lastPeriod')
    .get(X.json(), (req, res) => {
        findlastHundredEntries()
            .then((x) => {res.send(x);})
            .catch(console.error)
            .finally(() => CLIENT.close());
    });

GO.route('/insert/')
    .post(X.json(), (req, res) => {
        insertEntry(req.body)
            .then((result) => {res.send(result)})
            .catch(console.error)
            .finally(() => CLIENT.close());
    });
//#endregion

module.exports = GO;