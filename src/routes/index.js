/* eslint-disable linebreak-style */
const { countries, languages } = require('countries-list');

const routes = (app) => {
  app.get('/', (request, response) => {
    response.status(200).send('Hello');
  });

  app.get('/info', (request, response) => {
    // Express automaticamente va a agregar el status 200 correspondiente.
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
};


// Exporting a object instead of a function
// module.exports = {routes};
module.exports = routes;
