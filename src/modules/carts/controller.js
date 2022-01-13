const model = require("./model");

module.exports = {
	async getCarts(req, res) {
		const buyer = {
			name: req.user.name,
			phone: req.user.phone,
			email: req.user.email,
			address: req.user.address,
		};
		try {
			const carts = await model.getCarts(buyer);
			carts
				? res.status(200).json(carts)
				: res
						.status(202)
						.json({ status: "error", message: "something is wrong" });
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},
	///////////////////////////////
	async addCartProducts(req, res) {
		const buyer = req.user._id.toString();
		const { product, quantity } = req.body;
		try {
			const record = await model.addCartProducts({
				buyer,
				product,
				quantity,
			});
			res.status(201).json(record);
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},

	async updateCartProducts(req, res) {
		const buyer = req.user._id.toString();
		const product = req.params.id;
		const quantity = req.body.quantity;

		try {
			const record = await model.updateCartProducts({
				buyer,
				product,
				quantity,
			});
			res.status(201).json(record);
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},

	async deleteCartProducts(req, res) {
		const buyer = req.user._id.toString();
		const product = req.params.id;
		try {
			const record = await model.deleteCartProducts({ buyer, product });
			res.status(201).json(record);
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},
};