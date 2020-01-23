const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const UpdateController = require('./controllers/UpdateController');
const DeleteController = require('./controllers/DeleteController');
const routes = Router();

routes.get('/devs', DevController.index);
routes.delete('/devs', DeleteController.index);
routes.patch('/update', UpdateController.index);
routes.get('/search', SearchController.index);
routes.post('/devs', DevController.store);

module.exports = routes;