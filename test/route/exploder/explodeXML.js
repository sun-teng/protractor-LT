var env = require('../../env.js');

module.exports.explodeXML = function(){

describe('Exploder button =>', function(){
	it('should allow author to explode XML files', function(){
		browser.driver.get(env.domain+'/learntogether/exploder');//this should come from a config file
		browser.driver.findElement(by.xpath("//button[contains(.,'Explode')]")).click();
		browser.sleep(60000);
	});

});

};

