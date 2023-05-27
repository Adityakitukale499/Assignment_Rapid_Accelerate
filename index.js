const express = require('express');
const app = express();
const port = 3000;

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://adityakitukale4599:adityakitukale4599@cluster0.k53fd7v.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'Train_Schedule';

const client = new MongoClient(uri);


client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  const db = client.db(dbName);
  const trainsCollection = db.collection('trains');

  app.use(express.static('public'));
  
  app.get('/trains', async (req, res) => {
    const { source, destination } = req.query;

    try {
      
      const trains = await trainsCollection.find({ route: { $all: [source, destination] } }).toArray();

      
      const sortedTrains = trains.sort((a, b) => a.price - b.price);

      res.json(sortedTrains);
    } catch (error) {
      console.error('Error retrieving trains:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
