var env = require('../../env.js');
var loginPage = require('../login/login.js');
var root = require('../../data/users/root.js');

var subnav = require('../navbar/subnav.js');
var lesson = require('../../data/lessons/skillCommPlan1.js');

var navbar = require('../navbar/navbar.js');


loginPage.loginAs(root);

//do can also do navigation here using already written test or go directly to the route in the it function below
navbar.gotoPage('Learner');

describe('Quick test', function(){
		it('should do something', function(){

			//go directly to the route you wanna test
			browser.driver.get(env.domain + '/learntogether/canvas');

			// do something here
			browser.driver.findElement(by.xpath("//*[div[@class='title']='"+ lesson.name +"' and div[@class='level']='"+ lesson.level +"']")).click();
			browser.driver.sleep(3000);

			//expect something to happen
			expect(browser.driver.getCurrentUrl()).toBe(env.domain + '/learntogether/lesson/'+lesson.id);

		});
	
});

navbar.logout();
