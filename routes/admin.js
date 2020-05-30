var express = require('express');
var router = express.Router();

// connection to mongo
var mongoose = require('mongoose')
var db = 'mongodb://localhost/complete';
mongoose.connect(db);

// mongo Schema to be used
var Admin = require('../models/Admin.model')

// get Schema information from mongo db
router.get('/', function (req, res) {
    Admin.find({})
        .exec(function (err, admin) {
            if (err) {
                res.send('error!')
            } else {
                res.json(admin)
            }
        })
});

// check for a parent -- if none found return false (indicates not a user)
router.post('/', function (req, res) {
    Admin.findOne({ fname: req.body.fname })
        .exec(function (err, admin) {
            if (err) {
                console.log(err)
            } else if (!admin) {
                res.send(false)
            } else {
                res.json(admin)
            }
        
        }) 
});

module.exports = router;