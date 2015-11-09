var env = require('../../env.js');
module.exports.choose = function(sample){
	describe('Sample chooser directive =>', function(){
		it('Click  on select sample', function(){
			browser.driver.findElement(by.xpath("//div[./p[contains(.,'"+sample.title+"')]]/button[contains(.,'Select')]")).click();
			browser.driver.sleep(5000);
			expect(element(by.xpath("//ul/li[contains(.,'"+sample.title+"')]")).isPresent()).toBe(true);
		},60000);

	});

};
