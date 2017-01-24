const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// Home
app.get('/', (req, res) => {
  res.send('Please add at the end of the URL address "/api/whoami/"');
});

// Some String is passed in the URL
app.get('/api/whoami', (req, res) => {
  let info = {
  	ipaddress: req.headers.host,
  	language: req.headers['accept-language'],
  	software: req.headers['user-agent'],
  };

  res.send(JSON.stringify(info));
});

app.listen(port);


/*
"ipaddress":
"186.86.1.245",
"language":
"en-us",
"software":
"Macintosh; Intel Mac OS X 10_12_3"
}*/