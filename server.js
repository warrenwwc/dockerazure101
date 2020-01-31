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
<<<<<<< HEAD
var name = "World"
=======
var name = "AKS"
>>>>>>> parent of 99e3fb2... Merge pull request #2 from calvinmshko365/patch-1

app.get('/', (req, res) => {
  res.send('<h1>Hello ' + name + '</h1>');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
