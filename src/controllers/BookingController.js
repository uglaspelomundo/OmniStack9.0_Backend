const Booking = require('../models/Booking');
const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { user_id } = req.params;
        const { spot_id } = req.params;
        const { date } = req.body;

        const spot = await Spot.findById(spot_id);
        const user = await User.findById(user_id);

        if (spot && user) {

            var booking = await Booking.create({
                user: user_id,
                spot: spot_id,
                date,
            });

        } else {
            return res.status(400).json({
                message: 'Usuario ou Spot invalido'
            })
        }

        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
};