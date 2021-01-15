const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

//DB Connection


async function dbConnection() {
  console.log('Connecting to MongoDB...')
  try {
    await mongoose.connect(
      process.env.DB_CONNECT,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    )
    .then((db) => {
      app.listen(port, () => {
        console.log(`Listening Server @ port: ${port}...`);
      })
    })
  } catch (err) {
    console.log({'DBConnectionError': err})
  }
}


//Routes
app.get('/', (req, res) => {
  res.send('Welcome Home');
})
const usersRoute = require('./routes/users');

//middleware
app.use(cors());
app.use(express.json());
app.use('/users', usersRoute);

dbConnection();