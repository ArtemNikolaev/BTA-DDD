import express = require('express');
import bodyParser = require('body-parser');
import intermediary = require('./route/intermediary.route');
const app = express();

app.use(bodyParser.json());
app.use('/intermediary', intermediary);

app.listen(3000);
