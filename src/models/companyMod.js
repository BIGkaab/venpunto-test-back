//*modelo de compañia (users) en mongoose

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UniqueValidator = require('mongoose-unique-validator')

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    rif: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('company', CompanySchema.plugin(UniqueValidator))