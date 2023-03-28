const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://renan:renan@cluster0.lqgxqng.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8082,
  function () {
    console.log('listening on 8082');
  });

MongoClient.connect(connectionString, {useUnifiedTopology: true})
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('Guardos');
    // app.use(/* ... */)
    // app.get(/* ... */)
    // app.post(/* ... */)

  })
  .catch(console.error);

