// Index, show, store, update, destroy
// listar, listar unica, criar, atualizar, deletar

const User = require('../models/User')


module.exports = {
    async store(req, res) {
        // email = req.body.email;
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};