const mongoose = require('mongoose'),
    db = require('../models');


module.exports = {

    findAll: function(req, res){
       db.PicData
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};