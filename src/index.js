/**
 * 1. Написание приложения express
 * 2. Подключение библиотек к express
 * 3. Как пишутся роуты приложения
 * 4. Как написать свою middleware
 * 5. Использование mongoose
 * 6. body-parser
 * 7. Promise
 * 
 * 1. Добавить поля к фильмам
 * 2. Создать модель актеров
 * 3. Добавить несколько актеров
 * 4. Почитать доку express, body-parser, mongoose
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { filmsRouter } = require('./controllers/films');

const app = express();

mongoose.connect('mongodb://localhost:27017/imdb', {useNewUrlParser: true});

app.use(function (request, result, next) {
    request.hello = 'Hello world from middleware';
    next();
});

app.use(bodyParser.json());

// GET /
app.get('/', function (request, result) {
    result.send(request.hello);
});

app.use('/films', filmsRouter);

app.listen(3000, function () {
    console.log('Listening at http://0.0.0.0:3000')
});
