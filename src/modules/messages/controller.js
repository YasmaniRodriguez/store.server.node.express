const messageModel = require("./model");

module.exports = {
	async getMessages(req, res) {
		const filters = req.query;
		try {
			const messages = await messageModel.getMessages(filters);
			messages.length === 0
				? res
						.status(202)
						.json({ status: "error", message: "there is not messages" })
				: res.status(200).json(messages);
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},

	async addMessages(req, res) {
		const message = req.body;
		try {
			const record = await await messageModel.addMessages(message);
			res.status(201).json(record);
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},

	async updateMessages(req, res) {
		const message = req.params.id;
		const fields = req.body;
		try {
			const record = await messageModel.updateMessages(message, fields);
			res.status(200).json(record);
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},

	async deleteMessages(req, res) {
		const message = req.params.id;
		try {
			const record = await messageModel.deleteMessages(message);
			res.status(200).json(record);
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},
};
