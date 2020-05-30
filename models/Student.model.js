var mongoose = require('mongoose')
var Schema = mongoose.Schema

var StudentSchema = new Schema({
    fname: String,
    lname: String,
    totalHours: Number,
    detentionHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Detention' }],
    homeworkClubHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HomeworkClub' }]
})

module.exports = mongoose.model('Student', StudentSchema)

/*
original_id = ObjectId()

db.students.insert({
        fname: "Ralph",
        lname: "Cottontail",
        totalHours: 125,
        detentionHistory: [ObjectId("5eb062728ec536f27b41a3a8"), ObjectId("5eb062fb8ec536f27b41a3a9")],
        homeworkClubHistory: [ObjectId("5eb0a0388ec536f27b41a3af")]
    })

*/