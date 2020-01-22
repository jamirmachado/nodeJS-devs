const dev = require('../models/dev');

module.exports = {
    async index(request, response) {
        console.log(request.query);
        //const devs = await dev.find();
        return response.json({ devs: []});
    },
}