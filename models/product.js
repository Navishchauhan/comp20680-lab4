const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
const ProductSchema = new mongoose.Schema({
	name: String,
    description: String,
    price: Number
});

// constants
const ProductSchema;

module.exports = mongoose.model('Product', ProductSchema);