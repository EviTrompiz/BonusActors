const res = require('express/lib/response');
const db = require('../database/models/index.js');

const moviesController = {
    list: function(req, res){
        db.Pelicula.findAll()
        .then(function (pelicula){
            res.render("moviesList", {pelicula: pelicula});
        })
    },

    detail: function(req, res){
        db.Pelicula.findByPk(req.params.id)
        .then(function (pelicula){
            res.render("moviesDetail", {pelicula: pelicula});
        })
    },

    new: function(req, res){
        db.Pelicula.findAll({
            order: [[release_date, 'ASC']]
        })
        .then(function (pelicula){
            res.render("newestMovies", {pelicula: pelicula});
        })
    },
    
    recomended: function(req, res) {
        db.Pelicula.findAll({
            where: {},
            order: [release_date, 'DESC'],
            limit : 5 
        })
        .then(function (pelicula){
            res.render("newestMovies", {pelicula: pelicula});
        })
    }
}

module.exports = moviesController;
