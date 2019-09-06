'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

//Input display name here
var name = "Microsoft Hong Kong Summit 2019"

app.get('/', (req, res) => {
  res.send('<h1>Hello ' + name + '</h1>');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);