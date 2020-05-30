var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AdminSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('Admin', AdminSchema)

/*
db.admin.insert({
    fname: "Audrey",
    lname: "Wertz",
    email: "awertz.com",
    password: 123,
})
*/