var env = require('../../env.js');
module.exports.choose = function(challenge){
	describe('Challenge chooser directive =>', function(){
		it('Click  on select challenge', function(){
			//browser.driver.get(env.domain + '/learntogether/lesson/'+lesson.id);//this should come from a config file
			browser.driver.findElement(by.xpath("//div/p/u[contains(.,'"+challenge.title+"')]/button[contains(.,'Select')]")).click();
			browser.driver.sleep(5000);
			expect(element(by.xpath("//ul/li[contains(.,'"+challenge.title+"')]")).isPresent()).toBe(true);
		},60000);

	});

};
