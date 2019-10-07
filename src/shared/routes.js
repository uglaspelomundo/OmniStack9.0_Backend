const express = require('express');
const SessionController = require('../controllers/SessionControlle');
const SportController = require('../controllers/SpotController');

const routes = express.Router();

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
routes.post('/spots', SportController.store);

module.exports = routes;