'use strict'

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

function f() {
  x = 23;
  let x;
}

//Input display name here
var name = "World"

app.get('/', (req, res) => {
  res.send('<h1>Hello ' + name + '</h1>');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
