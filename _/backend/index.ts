const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const intermediary = require('./route/intermediary.route');

app.use(bodyParser.json());
app.use('/intermediary', intermediary);

app.listen(3000);
