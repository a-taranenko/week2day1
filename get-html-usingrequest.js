var request = require('request');

function printExampleHTML(callback) {
  request('http://www.google.com', function(err, response, body) {
    if (err) {
      throw err;
    }

    callback(response, body);
  });
}

function callback(response, body) {
  console.log('Chunck received. Response:\n' + response.body);
}

printExampleHTML(callback);