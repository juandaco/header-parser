const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// Home
app.get('/', (req, res) => {
  res.send('Please add at the end of the URL address "/api/whoami/"');
});

// Some String is passed in the URL
app.get('/api/whoami', (req, res) => {
	let ipaddress = req.ip || req.ips;
	ipaddress = ipaddress.slice(7);

  let info = {
  	ipaddress,
  	language: req.headers['accept-language'],
  	software: req.headers['user-agent'],
  };

  res.send(JSON.stringify(info));
});

app.listen(port);
