var env = require('../../env.js');

var loginPage = require('../login/login.js');
var mark = require('../../data/users/mark.js');

var subnav = require('../navbar/subnav.js');
var lesson = require('../../data/lessons/skillCommPlan1.js');

var canvas = require('../canvas/canvas.js');

var sideNav = require('../lessons/sideNav.js');

var mcqDir = require('../lessons/mcq.js');
var fillInDir = require('../lessons/fillIn');

var navbar = require('../navbar/navbar.js');


loginPage.loginAs(root);

//do can also do navigation here using already written test or go directly to the route in the it function below
subnav.gotoRoute('Learner');

canvas.goIntoLesson(lesson);
//for(var j = 0; j < 5; j ++){
//	sideNav.goToStep('Step '+j);
//	for(var i = 0; i < 5; i++){
//		sideNav.goToSubstep(j + '.'+(i+1));
//	}	
//}

sideNav.goToStep("Step 3");

sideNav.goToSubstep("3.1");


//fillInDir.doFillIn("typing",0,"test string", false);
fillInDir.doFillIn("dropdown",1,"baseline", false);



//mcqDir.doMCQ =(0,'The answer string', true);

navbar.logout();
