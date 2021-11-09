const express = require('express');
const { join } = require ('path');
const controller = require('./controllers/controller');

const app = express();

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(controller);

app.listen(8100, "::");