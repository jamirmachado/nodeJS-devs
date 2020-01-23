const dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const {github} = request.body;
        const developer = await dev.deleteOne({ github }, function (err) {});

        return response.json(developer);
    },
}