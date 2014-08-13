var router = function (event) {

	var message;
	try {
		message = JSON.parse(event.data);
	} catch (error) {
		return;
	}

	handlers[message.msg](event, message.data);

};

var handlers = {};

handlers["instance/create"] = function (event, data) {
	
};

handlers["instance/delete"] = function (event, data) {

};

handlers["instance/subscribe"] = function (event, data) {

};

module.exports = router;
