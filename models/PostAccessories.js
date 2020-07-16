const mongoose = require('mongoose');

const AccessorySchema = mongoose.Schema({
    id: String,
    phoneid: String,
    name: String,
    description: String,
    quantity: Number,
    image: String,
    isInstock: Boolean
})

module.exports = mongoose.model('Accessory' , AccessorySchema);