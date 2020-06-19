const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    code: String,
    active: Boolean,
    discount: Number,
});

const Promotions = mongoose.model('promotions', promotionSchema);
module.exports = Promotions;
