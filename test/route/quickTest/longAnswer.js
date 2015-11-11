var env = require('../../env.js');

var loginPage = require('../login/login.js');
var mark = require('../../data/users/mark.js');

var subnav = require('../navbar/subnav.js');
var lesson = require('../../data/lessons/skillCommPlan1.js');

var canvas = require('../canvas/canvas.js');

var sideNav = require('../lessons/sideNav.js');

var longAnswer = require('../lessons/longAnswer.js');

var navbar = require('../navbar/navbar.js');


loginPage.loginAs(mark);

//do can also do navigation here using already written test or go directly to the route in the it function below
subnav.gotoRoute('Learner');

canvas.goIntoLesson(lesson);

sideNav.goToStep("Step 5");
sideNav.goToSubstep("5.1");

longAnswer.do(0,"test long answer");





navbar.logout();
