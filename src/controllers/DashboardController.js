const Spot = require('../models/Spot')

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });

        if (spots.length === 0) {
            return res.status(400).json({
                message: 'Usuario nao existe'
            })
        }

        return res.json(spots);
    }
};