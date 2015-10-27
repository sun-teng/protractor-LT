var env = require('../../env.js');
var loginPage = require('../login/login.js');
var root = require('../../data/users/root.js');

var exploder = require('../exploder/explodeXML.js');

var navbar = require('../navbar/navbar.js');


loginPage.loginAs(root);

exploder.explodeXML();

navbar.logout();
