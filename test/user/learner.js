var loginDirective = require('../route/login/login.js');
var canvasDirective = require('../route/canvas/canvas.js');

var chooseMentorDirective = require('../route/lessons/chooseMentor.js');
var mcqDirective = require('../route/lessons/mcq.js');
var sideNav = require('../route/lessons/sideNav.js');

var globalNav = require('../route/navbar/navbar.js');
var subNav = require('../route/navbar/subnav.js');

module.exports = function(user){

	var learner = user;
	learner.chooseMentor =function(mentor,lesson){
		loginDirective.loginAs(learner);
		canvasDirective.goIntoLesson(lesson);
		chooseMentorDirective.chooseMentor(mentor,lesson);
		globalNav.logout();	
	};

	learner.checkAllNav = function(){
		loginDirective.loginAs(learner);
		subNav.gotoRoute('Learner');
		subNav.gotoRoute('Mentor');
		subNav.gotoRoute('Roleplayer');
		globalNav.gotoLearnerHome();
		globalNav.gotoProfile();
		globalNav.gotoNetwork();
		globalNav.logout();
	};

	learner.doOneMCQ = function(lesson){
		loginDirective.loginAs(learner);
		canvasDirective.goIntoLesson(lesson);
		sideNav.goToStep('Step 6');
		//sideNav.goToSubstep('6.1');	
		mcqDirective.doMCQ(0,'Contains the emails and other correspondence from the project',false);
		sideNav.goToStep('Step 3');
		mcqDirective.doFillIn(0,'right answer',true);
	
		globalNav.logout();
	};
	
	return learner;

}


