const gatewayModel = require("./model");
const { generateHash } = require("../../utils/functions");
const logger = require("../../services/log4js");
const passport = require("passport");

module.exports = {
	async registerUser(req, res, next) {
		const { email, password, confirm } = req.body;

		if (!email) {
			return res
				.status(417)
				.json({ status: "error", message: "you must enter an email address" });
		}

		if (!password) {
			return res
				.status(417)
				.json({ status: "error", message: "you must enter a password" });
		}

		if (password !== confirm) {
			return res
				.status(417)
				.json({ status: "error", message: "passwords are not the same" });
		}

		const userExists = await gatewayModel.getUsers({ email });

		if (userExists) {
			return res.status(417).json({
				status: "error",
				message: "that email address is already in use",
			});
		}

		const encryptedPassword = generateHash(req.body.password);

		const profile = {
			name: req.body.name,
			gender: req.body.gender,
			phone: req.body.phone,
			address: req.body.address,
			birthday: req.body.birthday,
			avatar: `/images/${req.file.filename}`,
			email: req.body.email,
			password: encryptedPassword,
			role: req.body.role,
			tyc: req.body.tyc,
		};
		try {
			await gatewayModel.registerUser(profile);
			res.status(201).json({ status: "ok", message: "user uploaded" });
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
		}
	},

	async loginUser(req, res, next) {
		const ssid = req.sessionID;
		try {
			passport.authenticate("local", (error, user, info) => {
				if (error) {
					logger.error(error);
					throw error;
				}

				if (!user) {
					res
						.status(417)
						.json({ status: "error", message: "wrong user or password" });
				} else {
					req.logIn(user, (error) => {
						if (error) {
							logger.error(error);
							throw error;
						} else {
							gatewayModel.loginUser(ssid);
							res.status(200).json({
								status: "ok",
								message: "successfully authenticated user",
							});
						}
					});
				}
			})(req, res, next);
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
			logger.error(error);
		}
	},

	async logoutUser(req, res, next) {
		try {
			await gatewayModel.logoutUser();
			res.status(200).json({ status: "ok", message: "logout success!" });
		} catch (error) {
			res.status(422).json({ status: "error", message: error.message });
			logger.error(error);
		}
	},
};
