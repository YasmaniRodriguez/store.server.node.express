const express = require("express");
const router = express.Router();

router.get("/orders", (req, res) => {
	const dataHandler = req.app.get("dataHandler");
	const myPromise = new Promise((resolve, reject) => {
		resolve(dataHandler.getOrders());
	});
	myPromise
		.then((result) => {
			result.length === 0
				? res.json({ error: "there is not orders" })
				: res.json({ orders: result });
		})
		.catch((error) => res.json(error));
});

router.get("/orders/:id", (req, res) => {
	const dataHandler = req.app.get("dataHandler");
	const myPromise = new Promise((resolve, reject) => {
		resolve(dataHandler.getOrders(req.params.id));
	});
	myPromise
		.then((result) => {
			result.length === 0
				? res.json({ error: "there is not orders" })
				: res.json({ orders: result });
		})
		.catch((error) => res.json(error));
});

router.post("/orders", (req, res) => {
	const dataHandler = req.app.get("dataHandler");
	const order = req.body;
	const myPromise = new Promise((resolve, reject) => {
		resolve(dataHandler.addOrders(order));
	});
	myPromise
		.then(() => {
			res.json({ message: "order uploaded" });
		})
		.catch((error) => res.json(error));
});

router.put("/orders/:id", (req, res) => {
	const dataHandler = req.app.get("dataHandler");
});

router.delete("/orders/:id", (req, res) => {
	const dataHandler = req.app.get("dataHandler");
});

module.exports = router;
