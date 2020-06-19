const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
	const product = await product.findById(req.params.id);
	res.render(`${viewPath}/show`,{
		pageTitle: product.title,
		product: product
	});
};

exports.new = (req, res) => {
  res.redirect(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {
	try{
		const product = await Product.create(req.body);
		res.redirect(`/products/${product.id}`);
	} catch (err) {
		res.send(err);
}
};