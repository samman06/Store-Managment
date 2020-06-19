const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "departments"
    },
    promotionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "promotions"
    }
});

const Products = mongoose.model('products', productSchema);
module.exports = Products;
