const mongoose = require('mongoose');
const barSchema = new mongoose.Schema({
    name: String,
    picture: String,
    description: String,
    price: String,
    type: [String],
});

module.exports = mongoose.model('bar', barSchema);