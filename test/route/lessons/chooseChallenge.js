var env = require('../../env.js');
module.exports.choose = function(challenge){
	describe('Challenge chooser directive =>', function(){
		it('Click  on select challenge', function(){
			//browser.driver.get(env.domain + '/learntogether/lesson/'+lesson.id);//this should come from a config file
			browser.driver.findElement(by.xpath("//div/p/u[contains(.,'"+challenge.title+"')]/button[contains(.,'Select')]")).click();
			browser.driver.sleep(1000);
			//expect(browser.driver.getCurrentUrl()).toBe('https://localhost:4000/learntogether/canvas');
		},60000);

	});

};
