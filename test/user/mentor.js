var loginDirective = require('../route/login/login.js');
var requestDirective = require('../route/mentor/request.js');
var globalNav = require('../route/navbar/navbar.js');

module.exports = function(user){
	var mentor = user;
	mentor.acceptMentee = function(mentee){// shouldn't lesson be here?
		loginDirective.loginAs(mentor);
		requestDirective.acceptMentee(mentee);
		globalNav.logout();
	};
	return mentor; 
};


