// Index, show, store, update, destroy
// listar, listar unica, criar, atualizar, deletar

const User = require('../models/User')


module.exports = {
    async store(req, res) {
        //email = req.body.email;
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            const user = await User.create({ email });
        } else {
            return res.json({ message: 'Usuario ja cadastrado' })
        }
        

        return res.json(user);
    }
};