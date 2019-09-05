'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

var name = "Microsoft"

app.get('/', (req, res) => {
  res.send('<h1>Hello ' + name + '</h1>');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);