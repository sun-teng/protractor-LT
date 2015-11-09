var env = require('../../env.js');

var loginPage = require('../login/login.js');
var mark = require('../../data/users/mark.js');

var subnav = require('../navbar/subnav.js');
var lesson = require('../../data/lessons/skillCommPlan1.js');

var canvas = require('../canvas/canvas.js');

var sideNav = require('../lessons/sideNav.js');
var chooseSample = require('../lessons/chooseSample.js');
var chooseChallenge = require('../lessons/chooseChallenge.js');

var mcqDir = require('../lessons/mcq.js');
var fillInDir = require('../lessons/fillIn');

var navbar = require('../navbar/navbar.js');


loginPage.loginAs(mark);

//do can also do navigation here using already written test or go directly to the route in the it function below
subnav.gotoRoute('Learner');

canvas.goIntoLesson(lesson);
//for(var j = 0; j < 5; j ++){
//	sideNav.goToStep('Step '+j);
//	for(var i = 0; i < 5; i++){
//		sideNav.goToSubstep(j + '.'+(i+1));
//	}	
//}

sideNav.goToStep("Step 6");
sideNav.goToSubstep("6.2");



//fillInDir.doFillIn("typing",0,"test string", false);
chooseSample.choose({title:"Simple Matrix #1"});

sideNav.goToStep("Step 11");
sideNav.goToSubstep("11.2");



//fillInDir.doFillIn("typing",0,"test string", false);
chooseSample.choose({title:"Use Existing Project Work Product"});

//mcqDir.doMCQ =(0,'The answer string', true);

navbar.logout();
