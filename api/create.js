var express = require('express' );
var router = express.Router();

// connection to mongo
var mongoose = require('mongoose')
var db = 'mongodb://localhost/complete';
mongoose.connect(db);

var Student = require('../models/Student.model')

router.get('/', function(req, res) {
    res.send('response recieved')
}) 

// create a new parent and connect them to their student via POST
router.post('/', function (req, res) {
    Student.findOne({ fname: req.body.studentFname, lname: req.body.studentLname })
        .exec(function (err, student) {
            if (err) {
                console.log(err)
            }

            var newParent = new Parent();
            newParent.fname = req.body.fname
            newParent.lname = req.body.lname
            newParent.email = req.body.email
            newParent.password = req.body.password
            newParent.student = student
            
            newParent.save(function (err, parent) {
                if (err) {
                    res.send('error')
                } else {
                    res.json(parent)
                }
            })
        })

    
})