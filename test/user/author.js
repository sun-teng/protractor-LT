var loginDirective = require('../route/login/login.js');
var explodeXMLDirective = require('../route/exploder/explodeXML.js');
var globalNav = require('../route/navbar/navbar.js');


module.exports = function(user){
	var author = user;
	author.explodeXML = function(){// shouldn't lesson be here?
		loginDirective.loginAs(author);
		explodeXMLDirective.explodeXML();
		globalNav.logout();
	};
		
	return author;	
};
