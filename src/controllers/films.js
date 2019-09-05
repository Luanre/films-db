const { Router } = require('express');
const { Film } = require('../models/films');

const filmsRouter = Router();

// GET /films/
filmsRouter.get('/', function (req, result) {
    return new Promise((resolve, reject) => {
        Film.find((err, films) => {
            if (err) {
                reject(err);
                return;
            }

            result.send(films);
            resolve(films);
        });
    });
});

// POST /films/create
filmsRouter.post('/create', function (req, res) {
    const { name, year } = req.body;

    const film = new Film({
        name,
        year
    });

    film.save(function (err, film) {
        if (err) throw new Error(err);

        res.send('Film created');
    });
});

module.exports = { filmsRouter };

/**
 * [
        { name: 'Игра престолов', year: 2016 },
        { name: 'Заводной апельсин', year: 1976 },
    ]
 */