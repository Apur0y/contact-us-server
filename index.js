const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://contactUs:kf9Qi1GqpGyrmUZ7@thelaststand.sh6jy.mongodb.net/?retryWrites=true&w=majority&appName=thelaststand";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const infoCollection = client.db("ContactInfo").collection("userInfo");

    app.post("/datainfo",async(req,res)=>{

      const data  = req.body;
      const result = await infoCollection.insertOne(user);
      res.send(result)

    });

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


//kf9Qi1GqpGyrmUZ7
//contactUs