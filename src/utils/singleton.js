const conf = require("../config");
const logger = require("../services/log4js");
const mongo = require("../services/mongoose");
const mysql = require("../services/knex").mysql;
const pers = process.env.PERS || conf.PERS;

class DataHandler {
	static instance;

	constructor() {
		if (!DataHandler.instance) {
			switch (pers) {
				case "mongo":
					this.handler = new mongo();
					DataHandler.instance = this.handler;
					break;

				case "mysql":
					this.handler = new mysql();
					DataHandler.instance = this.handler;
					break;

				default:
					logger.info("persistence mode was not defined");
					break;
			}
		} else {
			return DataHandler.instance;
		}
	}

	getHandler() {
		return this.handler;
	}
}

module.exports = DataHandler;
