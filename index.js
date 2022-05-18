const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7nlkh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();

        const tasksCollection = client.db("taskTracker").collection("tasks");

        /* app.get('/tasks', async (req, res) => {
            const email = req.query.email;
            const query = { email };
            const cursor = tasksCollection.find(query);
            const tasks = await cursor.toArray();

            res.send(tasks);
        }) */

        /*  app.post('/tasks', async (req, res) => {
             const newTasks = req.body;
             console.log(newTasks);
             const result = await tasksCollection.insertOne(newTasks);
 
             res.send(result);
         }) */

        /* app.delete('/task/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            console.log(query);
            const result = await tasksCollection.deleteOne(query);

            res.send(result);
        }) */
    }
    finally { }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Task Tracker Server is Running');
})

app.listen(port, () => {
    console.log(`listening on port`, port);
})