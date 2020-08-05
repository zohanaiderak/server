const mongoose = require('mongoose');

const PhoneSchema = mongoose.Schema({
    id: String,
    name: String,
    company: String,
    images: String,
    accessory: Array
})

module.exports = mongoose.model('Phones' , PhoneSchema);