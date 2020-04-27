/* eslint-disable linebreak-style */
/*
  function info(text) {
  console.log("INFO:", text);
  return text;
}
*/

// Convirtiendo a arrow functions, segun recomiend eslint.

const info = (text) => {
  console.log('INFO:', text);
  return text;
};

const error = (text) => {
  console.log('ERROR:', text);
  return text;
};

module.exports.info = info;
module.exports.error = error;

// module.exports = { info, error }
