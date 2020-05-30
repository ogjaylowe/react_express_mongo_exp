var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ParentSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    student: {type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
})

module.exports = mongoose.model('Parent', ParentSchema)

/*
db.parents.insert({
    fname: "Peter",
    lname: "Cottontail",
    email: "pcottontail_forest.com",
    password: 123,
    student: ObjectId("5eb0a14c8ec536f27b41a3b0")
})
*/