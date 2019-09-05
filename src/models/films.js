const mongoose = require('mongoose');

const Film = mongoose.model('Film', { 
    name: String,
    year: Number
});

module.exports = { Film };
