/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');

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

// Migrando a arrow function
app.listen(4000, () => {
  console.log('running on 4000');
});
