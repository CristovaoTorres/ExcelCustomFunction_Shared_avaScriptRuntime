'use strict';

const express = require('express');
var router = express.Router();


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('@Hello World!S!!');
});

app.use('/', router);

app.use(express.static('dist'));
app.use(express.static('assets'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/assets'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);