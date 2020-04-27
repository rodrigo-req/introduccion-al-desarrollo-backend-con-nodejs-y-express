/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const { info, error } = require('./modules/my-log');

/*
  Los archivos index.js se detectan automatica dentro de una carpeta cuando estan solos.
  Por lo tanto no hace falta definir index, y ./routes es suficiente.
*/
const routes = require("./routes")

// In case the export was planned as a function and not a object.
// const myRoutes = require("./routes")

app = express();


// myRoutes.routes(app);
routes(app);

app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});

/*
app.listen(4000, function () {
  console.log('running on 4000');
});
*/

// Migrando a arrow function
app.listen(4000, () => {
  console.log('running on 4000');
});
