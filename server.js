'use strict'

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

//Input display name here
var name = "AKS_2019"

app.get('/', (req, res) => {
  res.send('<h1>Hello ' + name + '</h1>');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
