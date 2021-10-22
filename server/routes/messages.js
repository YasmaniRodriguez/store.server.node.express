const express = require("express");
const router = express.Router();

router.get("/messages", (req, res) => {
	const DAO = req.app.get("dataHandler");
	const myPromise = new Promise((resolve, reject) => {
		resolve(DAO.getMessages());
	});
	myPromise
		.then((result) => {
			result.length === 0
				? res.json({ error: "there is not messages" })
				: res.json({ messages: result });
		})
		.catch((error) => res.json(error));
});

router.post("/messages", (req, res) => {
	const DAO = req.app.get("dataHandler");
	const message = req.body;
	const myPromise = new Promise((resolve, reject) => {
		resolve(DAO.addMessages(message));
	});
	myPromise
		.then(() => {
			res.json({ message: "message uploaded" });
		})
		.catch((error) => res.json(error));
});

module.exports = router;
