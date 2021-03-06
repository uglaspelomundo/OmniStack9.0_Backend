const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {

    // FILTRANDO A TECNOLOGIA
    async index(req, res) {
        const { tech } = req.query;

        const regex = new RegExp(tech, 'i')
        const spots = await Spot.find({ techs: regex });

        if (spots.length === 0) {
            return res.status(400).json({
                message: 'Nenhum registro encontrado'
            });
        }

        return res.json(spots);
    },


    // CRIANDO SPOT
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        //Consultar se o user existe
        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({
                message: 'Usuario nao existe'
            });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })


        return res.json(spot)
    }
};