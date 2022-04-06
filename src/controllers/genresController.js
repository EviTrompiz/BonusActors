const res = require('express/lib/response');
const db = require('../database/models/index.js');

const genresController = {
    list: function(req, res){
        db.Genero.findAll()
        .then(function (genero){
            res.render("genresList", {genero:genero});
        })
    },

    detail: function(req, res){
        db.Genero.findByPk(req.params.id)
        .then(function (genero){
            res.render("genresDetail", {genero:genero});
        })
    }
}

module.exports = genresController;