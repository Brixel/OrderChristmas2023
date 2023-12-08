// mongo.js

import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const router = express.Router();

// Connection URI to your MongoDB database
const uri = `mongodb://${process.env.IP}/brixel`;

// route to fetch all consumable items from MongoDB
router.get("/Consumables", async (req, res) => {
  try {
    // Connect to the MongoDB server
    const client = new MongoClient(uri);
    await client.connect();

    // Access your database and collection
    const database = client.db();
    const collection = database.collection("FoodItems2023");

    // Query your collection (replace with your own logic)
    const data = await collection.find({}).toArray();

    // Close the connection
    await client.close();

    // Send the data as the response
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/Order", async (req, res) => {
  // Connect to the MongoDB server
  const client = new MongoClient(uri);
  await client.connect();
  try {
    // Get data from the request body (assuming JSON format)
    const newData = req.body;
    newData.status = "ordered";
    newData.startTime = new Date(Date.now());
    newData.endTime;


    // Access your database and collection
    const database = client.db();
    const collection = database.collection("FoodOrders2023");

    if (newData.data == "Hotdog (vegan)" || newData.data == "Pasta (Vegan)") {
      const result = await collection.insertOne(newData);
    }
    // Check if the item already exists based on the 'data' field
    const existingItem = await collection.findOne({ data: newData.data });

    if (existingItem) {
      // If the item already exists, check the 'status' property
      if (existingItem.status === "ordered" || existingItem.status === "busy") {
        // If the status is 'ordered' or 'busy', don't do anything
        res.json({ message: "Item already exists and has status ordered or busy, no action taken", existingItem }).send();
      } else if (existingItem.status === "ready") {
        const result = await collection.insertOne(newData);
        // Send the result as the response
        res.json({ message: "Data added successfully because state was ready", insertedId: result.insertedId }).send();
      } else {
        // Handle other status values if needed
        res.json({ message: "Item already exists but has an unsupported status", existingItem });
      }
    }
    else {
      // If the item doesn't exist, insert it into the collection
      const result = await collection.insertOne(newData);
      // Send the result as the response
      res.json({ message: "Data added successfully", insertedId: result.insertedId });
    }

    // Close the connection
    await client.close();
  } catch (error) {
    console.error("Error adding data to MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/items/ordered", async (req, res) => {
  // Connect to the MongoDB server
  const client = new MongoClient(uri);
  await client.connect();
  try {

    const db = client.db();
    const collection = db.collection("FoodOrders2023");

    const orderedItems = await collection.find({ status: "ordered" }).toArray();
    // console.log(orderedItems);
    res.json(orderedItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" }).send();
  } finally {
    // Close the MongoDB connection
    client.close();
  }
});

router.get("/items/busy", async (req, res) => {
  // Connect to the MongoDB server
  const client = new MongoClient(uri);
  await client.connect();
  try {

    const db = client.db();
    const collection = db.collection("FoodOrders2023");

    const busyItems = await collection.find({ status: "busy" }).toArray();
    // console.log(orderedItems);
    res.json(busyItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" }).send();
  } finally {
    // Close the MongoDB connection
    client.close();
  }
});

router.get("/items/ready", async (req, res) => {
  // Connect to the MongoDB server
  const client = new MongoClient(uri);
  await client.connect();
  try {

    const db = client.db();
    const collection = db.collection("FoodOrders2023");

    const readyItems = await collection.find({ status: "ready" }).toArray();
    console.log(readyItems);
    res.json(readyItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" }).send();
  } finally {
    // Close the MongoDB connection
    client.close();
  }
});

// Update route
router.put('/move', async (req, res) => {
  const id = req.body.item._id;
  console.log(req.body)
  const position = req.body.position

  let newstate;
  switch (req.body.item.status) {
    case "ordered":
      position == "p" ? newstate = "busy" : newstate = "ordered";
      break;
    case "busy":
      position == "p" ? newstate = "ready" : newstate = "ordered";
      break;
    case "ready":
      position == "p" ? newstate = "ready" : newstate = "busy";
      break;

    default:
      break;
  }

  // Connect to MongoDB
  const client = await MongoClient.connect(uri);
  const db = client.db();
  try {

    // Update the field in the document
    const result = await db.collection("FoodOrders2023").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: newstate } }
    );

    // Check if the document was found and updated
    if (result.matchedCount > 0) {
      res.status(200).json({ message: 'Field updated successfully' }).send();
    } else {
      res.status(404).json({ message: 'Document not found' }).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' }).send();
  } finally {
    // Close the MongoDB connection
    client.close();
  }
});
export default router;
