const { MongoClient } = require('mongodb');

const stations = [
  'Station A',
  'Station B',
  'Station C',
  'Station D',
  'Station E',
  // Add more stations as needed
];

const totalTrains = 1000;
const dbUrl = "mongodb+srv://adityakitukale4599:adityakitukale4599@cluster0.k53fd7v.mongodb.net/?retryWrites=true&w=majority";

const dbName = 'Train_Schedule'; 



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function populateDatabase() {
  try {
    const client = await MongoClient.connect(dbUrl);
    const db = client.db(dbName);
    const trainsCollection = db.collection('trains');

    const trains = [];

    
    for (let i = 1; i <= totalTrains; i++) {
      const train = {
        name: `Train ${i}`,
        route: [],
        distance: 0,
      };

      const numStations = getRandomNumber(2, 5); 
      
      let prevStation = null;

      for (let j = 0; j < numStations; j++) {
        let station;
        do {
          station = stations[getRandomNumber(0, stations.length - 1)]; 

        } while (station === prevStation); 
        

        train.route.push(station);
        prevStation = station;

        if (j > 0) {
          const distance = getRandomNumber(50, 200);
          train.distance += distance;
        }
      }

      train.price = train.distance * 1.25; 
      

      trains.push(train);
    }

    
    await trainsCollection.insertMany(trains);
    console.log('Train data inserted into the database.');

    client.close();
  } catch (error) {
    console.error('Error while populating the database:', error);
  }
}

populateDatabase();
