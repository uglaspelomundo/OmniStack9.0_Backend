const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload')


const SessionController = require('../controllers/SessionController');
const SportController = require('../controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

// req.query = acessar query params (para filtro)
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao)


routes.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
})

routes.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
})

//POST
routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SportController.store);

module.exports = routes;