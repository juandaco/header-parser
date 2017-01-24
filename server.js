const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// Home
app.get('/', (req, res) => {
  res.send('Please add at the end of the URL address "/api/whoami/"');
});

// Some String is passed in the URL
app.get('/api/whoami', (req, res) => {
	// Header best practices


	let ipaddress = req.ip || req.ips;
	ipaddress = ipaddress.slice(7);
	let language = req.headers['accept-language'];
	language = language.slice(0, 5);
	let software = req.headers['user-agent'];
	software = software.slice(software.indexOf('('), software.indexOf(')'));

  const info = {
  	ipaddress,
  	language,
  	software: req.headers['user-agent'],
  };

  res.json(info);
});

app.listen(port);
