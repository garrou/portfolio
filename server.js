const express = require('express');
const path = require('path');
const app = express();
const controller = require('./controllers/controller');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(controller);

app.listen(8100, "::");