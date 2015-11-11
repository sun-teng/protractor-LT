var env = require('../../env.js');

var waitTime = 1000;


module.exports.do= function(questionIndex,answerStr){
	questionIndex = questionIndex + 1;//xpath index are 1 based instead of zero based
	describe('Testing long answer directives =>', function(){
		it('Doing and submit a long answer from a substep should give a submitted feedback', function(){
			
			var submit = element(by.xpath("(//questionla)["+questionIndex+"]/div/div/button[contains(.,'Submit')]"));
			var answer = element(by.xpath("(//questionla)["+questionIndex+"]/div/div/textarea"));
			answer.sendKeys(answerStr);
			
				
			browser.executeScript('arguments[0].click();', submit.getWebElement());
			browser.sleep(5000);
			//expect(answer.getAttribute('style')).toContain('red');
		},360000);

	});

};
