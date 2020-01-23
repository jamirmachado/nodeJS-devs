const dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const {github, techs, latitude, longitude} = request.body;
        const techsArray = parseStringAsArray(techs);
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
        const update = {
            techs: techsArray,
            location:  location
        };
        const developer = await dev.findOneAndUpdate(github, update, {new: true});
        return response.json({ developer });
    },
}