const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// Home: Instructions for using the app
app.get('/', (req, res) => {
  res.send('Please add at the end of the URL address "/api/whoami/"');
});

app.get('/api/whoami', (req, res) => {
	// Variable for string cleanup
	let language = req.headers['accept-language'];
	language = language.slice(0, 5);

	let software = req.headers['user-agent'];
	software = software.slice(software.indexOf('(') + 1, software.indexOf(')'));

  const info = {
  	ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
  	language,
  	software,
  };

  res.json(info);
});

app.listen(port);
