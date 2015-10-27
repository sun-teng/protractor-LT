var env = require('../../env.js');

module.exports.loginAs = function(user){

describe('Login directive => ', function(){
	it('entering username and password should allow user to login', function(){
		browser.driver.get(env.domain+'/auth/login');//this should come from a config file
		browser.driver.findElement(by.css('input.form-control[name=email]')).sendKeys(user.email);
		browser.driver.findElement(by.css('input.form-control[name=password]')).sendKeys(user.password);
		browser.driver.findElement(by.css('button[type=submit]')).click();
		expect(browser.driver.getCurrentUrl()).toBe(env.domain + '/learntogether/canvas');
	},60000);

});

};

