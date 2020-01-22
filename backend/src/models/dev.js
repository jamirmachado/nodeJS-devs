const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');
const devSchema = new mongoose.Schema({
    github: String,
    name: String,
    avatar_url: String,
    bio: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    }
});

module.exports = mongoose.model('dev', devSchema);