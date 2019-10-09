const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload')


const SessionController = require('../controllers/SessionController');
const SportController = require('../controllers/SpotController');
const DashboardController = require('../controllers/DashboardController');
const BookingController = require('../controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// req.query = acessar query params (para filtro)
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao)


// GET
routes.get('/spots', SportController.index);
routes.get('/dashboard', DashboardController.show);

//POST
routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SportController.store);
routes.post('/spots/:spot_id/bookings/:user_id', BookingController.store);

module.exports = routes;