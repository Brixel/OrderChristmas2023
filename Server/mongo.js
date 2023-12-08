// mongo.js

import express from "express";
import { MongoClient } from "mongodb";

const router = express.Router();

// Connection URI to your MongoDB database
const uri = "mongodb://127.0.0.1/brixel";

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
  try {
    // Get data from the request body (assuming JSON format)
    const newData = req.body;
    newData.status = "ordered";
    newData.startTime = new Date(Date.now());
    newData.endTime;

    // Connect to the MongoDB server
    const client = new MongoClient(uri);
    await client.connect();

    // Access your database and collection
    const database = client.db();
    const collection = database.collection("FoodOrders2023");

    if (newData.data == "Hotdog (vegan)" || newData.data == "Pasta (Vegan)" ) {
      const result = await collection.insertOne(newData);
    }
    // Check if the item already exists based on the 'data' field
    const existingItem = await collection.findOne({ data: newData.data });

    if (existingItem) {
      // If the item already exists, check the 'status' property
      if (existingItem.status === "ordered" || existingItem.status === "busy") {
        // If the status is 'ordered' or 'busy', don't do anything
        res.json({ message: "Item already exists and has status ordered or busy, no action taken", existingItem });
      } else if (existingItem.status === "ready") {
        const result = await collection.insertOne(newData);
        // Send the result as the response
        res.json({ message: "Data added successfully because state was ready", insertedId: result.insertedId });
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
  try {
    // Connect to the MongoDB server
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db();
    const collection = db.collection("FoodOrders2023");

    const orderedItems = await collection.find({ status: "ordered" }).toArray();
    // console.log(orderedItems);
    res.json(orderedItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/items/busy", async (req, res) => {
  try {
    // Connect to the MongoDB server
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db();
    const collection = db.collection("FoodOrders2023");

    const busyItems = await collection.find({ status: "busy" }).toArray();
    // console.log(orderedItems);
    res.json(busyItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/items/ready", async (req, res) => {
  try {
    // Connect to the MongoDB server
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db();
    const collection = db.collection("FoodOrders2023");

    const readyItems = await collection.find({ status: "ready" }).toArray();
    console.log(readyItems);
    res.json(readyItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default router;
