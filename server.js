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
	let language = req.headers['accept-language'];
  let	software = req.headers['user-agent'];

  let info = {
  	ipaddress,
  	langauage,
  	software,
  };

  res.send(JSON.stringify(info));
});

app.listen(port);

