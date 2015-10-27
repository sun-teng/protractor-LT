var env = require('../../env.js');
module.exports.acceptMentee = function(mentee){
	describe('Accept mentee', function(){
		it('should accept a mentee request', function(){
			browser.driver.get(env.domain + '/learntogether/mentor');//this should come from a config file
			browser.driver.sleep(3000);
			browser.driver.findElement(by.xpath("//*[div/p/strong[text()[contains(.,'"+mentee.name+"')]]]")).then(function(elem){
				elem.findElement(by.xpath("//*[text()='Accept']")).click();
				browser.driver.sleep(3000);
				browser.switchTo().alert().accept();
			});
			
			browser.driver.sleep(3000);
			//expect(browser.driver.getCurrentUrl()).toBe(env.domain + '/learntogether/canvas');
		},60000);

	});

};


