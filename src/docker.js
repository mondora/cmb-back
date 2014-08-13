var Docker = require("dockerode");

module.exports = {
	init: function () {
		this.docker = new Docker({
			host: process.env.DOCKER_HTTP_ENDPOINT,
			port: process.env.DOCKER_PORT
		});
	}
};
