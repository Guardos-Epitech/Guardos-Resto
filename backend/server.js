const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://renan:renan@cluster0.lqgxqng.mongodb.net/test?retryWrites=true&w=majority'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(8082, function() {
    console.log('listening on 8082')
})

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('Guardos')
    const quotesCollection = db.collection('IngredientsMVP')
    // app.use(/* ... */)
    app.get('/get', (req, res) => {
        db.collection('IngredientsMVP').find().toArray()
        .then(results => {
          res.json(results)
        })
        .catch(error => console.error(error))
    })
    app.post('/post', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            res.json(result)
          })
          .catch(error => console.error(error))
      })
    app.delete('/delete', (req, res) => {
      quotesCollection.deleteOne(req.body)
        .then(result => {
          res.json(result)
        })
        .catch(error => console.error(error))
    })
}).catch(console.error)

