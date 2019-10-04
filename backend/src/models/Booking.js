const mongoogse = require('mongoose');

const BookingSchema = new mongoogse.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoogse.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoogse.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoogse.model('Booking', BookingSchema);