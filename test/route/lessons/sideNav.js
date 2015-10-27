var env = require('../../env.js');

var waitTime = 2000;



module.exports.goToStep = function(stepStr){// stepStr example: 'Step 1' 'Step 2'
	describe('Testing lessons side navbar =>', function(){
		it('click on step go to step', function(){
			
			var step = element(by.xpath("//li[b='" + stepStr + "']"));
			browser.executeScript('arguments[0].click();', step.getWebElement());
			
			browser.driver.sleep(waitTime);
			expect(element(by.xpath("//div[@class='content ng-scope']/div/h1")).getText()).toContain(stepStr);//check if the step string in the content header
			
			
		},360000);

	});

};

module.exports.goToSubstep = function(substepStr){// substepStr example: '4.1' '3.2'
	describe('Testing lessons side navbar =>', function(){
		it('click on substep go to substep', function(){
			
			var substep = element(by.xpath("//li[b='" + substepStr + "']"));
			browser.executeScript('arguments[0].click();', substep.getWebElement());
			
			browser.driver.sleep(waitTime);
			expect(element(by.xpath("//div[@ng-repeat='subStep in step.subSteps']/h5")).getText()).toContain(substepStr);//check if the step string in the content header
			
			
		},360000);

	});

};
