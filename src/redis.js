var redis = require("redis");

module.exports = {
	init: function () {
		this.redis = redis.createClient(
			process.env.REDIS_PORT,
			process.env.REDIS_TCP_ENDPOINT
		);
	}
};
