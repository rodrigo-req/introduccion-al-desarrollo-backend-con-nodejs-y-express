/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const { countries, languages } = require('countries-list');
const { info, error } = require('./modules/my-log');

app = express();

// Configurando get

app.get('/', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/info', (request, response) => {
  // Express automaticamente va a agregar el status 200 correspondiente.
  info('Show logs of info on console output.');
  response.send('INFO');
});

app.get('/country', (request, response) => {
  console.log(request.query);
  // response.send(JSON.stringify(countries[request.query.code]));
  // Para poder mostrar JSON con express utilizamos response.json
  response.json(countries[request.query.code]);
});

app.get('/languages/:lang', (request, response) => {
  console.log('Request.params:', request.params);
  // Se puede capturar un parametro con ":NOMBRE"

  const lang = languages[request.params.lang];

  // Si tuviese que retornar error en formato JSON
  if (lang) {
    // response.json(lang);
    response.json({ status: 'OK', data: lang });
  } else {
    response.status(404).json({
      status: 'NOT FOUND',
      message: `Language ${request.params.lang} not found.`,
    });
  }
});


/*
  Function for commit from A
*/


app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});

/*
app.listen(4000, function () {
  console.log('running on 4000');
});
*/

/*
  Function for commit from B
*/

// Migrando a arrow function
app.listen(4000, () => {
  console.log('running on 4000');
});
