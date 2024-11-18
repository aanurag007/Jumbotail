const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    weight: Number,
    sellerId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Product', productSchema);
