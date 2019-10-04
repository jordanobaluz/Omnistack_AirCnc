const mongoogse = require('mongoose');

const SpotSchema = new mongoogse.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoogse.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoogse.model('Spot', SpotSchema);