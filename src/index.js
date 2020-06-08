/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

console.log('Mongo CS:', process.env.MONGO);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

/*
  Importo index.js de v1, por lo que no hace falta definirlo en el require.
*/
const routesv1 = require('./routes/v1');

// In case the export was planned as a function and not a object.
// const myRoutes = require("./routes")

routesv1(app);

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to mongoDB');
  })
  .catch((error) => {
    console.log('MongoDB Error:', error);
  });

// En caso de que no se defina PORT, setear 4000.
const PORT = process.env.PORT || 4000;

// Migrando a arrow function
app.listen(process.env.PORT, () => {
  console.log(`running on ${PORT}`);
});
