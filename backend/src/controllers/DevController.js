const axios = require('axios');
const dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const devs = await dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const {github, techs, latitude, longitude} = request.body;
        let developer = await dev.findOne( {github} );

        if(!developer) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github}`);
            const {name = login, avatar_url, bio} = apiResponse.data;
            const techsArray = parseStringAsArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            developer = await dev.create({
                github,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
            console.log(name, avatar_url, bio);
        }
        return response.json(developer);
    }
};