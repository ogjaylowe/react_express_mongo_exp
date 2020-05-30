var express = require('express');
var router = express.Router();

// connection to mongo
var mongoose = require('mongoose')
var db = 'mongodb://localhost/complete';
mongoose.connect(db);

var HomeworkClub = require('../models/HomeworkClub.model')
var Student = require('../models/Student.model')

// get Schema information from mongo db
router.get('/', function (req, res) {
    Student.findOne({ _id: "5eb0a14c8ec536f27b41a3b0" })
        .populate('homeworkClubHistory')
        .exec(function (err, populated) {
            if (err) {
                res.send(err)
            } else {
                res.json(populated.homeworkClubHistory)
            }
        })
});

router.get('/', function (req, res) {
    res.send('response recieved')
})

module.exports = router;