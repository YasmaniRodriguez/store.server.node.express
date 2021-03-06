const config = require("../config");
const logger = require("../services/log4js");
const mongo = require("../services/mongoose");

class SingleDataAccessObject {
	//singleton pattern:
	static instance;

	constructor() {
		if (!SingleDataAccessObject.instance) {
			switch (config.PERSISTENCE) {
				case "mongo":
					this.handler = new mongo();
					SingleDataAccessObject.instance = this;
					break;
				default:
					logger.info("persistence mode was not defined");
					break;
			}
		} else {
			return SingleDataAccessObject.instance;
		}
	}

	getHandler() {
		return this.handler;
	}
}

module.exports = SingleDataAccessObject;
