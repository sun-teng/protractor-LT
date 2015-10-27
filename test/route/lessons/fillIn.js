var env = require('../../env.js');

var waitTime = 1000;


module.exports.doFillIn= function(fillInType,questionIndex,answerStr,isCorrect){
	questionIndex = questionIndex + 1;//xpath index are 1 based instead of zero based
	describe('Testing fillin directives =>', function(){
		it('Doing and submit a FillIn from a substep should give a right or wrong reply', function(){
			
			if(fillInType == "typing"){
				var submit = element(by.xpath("(//fillin)["+questionIndex+"]/span/button[contains(.,'Submit')]"));
				var answer = element(by.xpath("(//fillin)["+questionIndex+"]/span/input"));
				answer.sendKeys(answerStr);
			}else if(fillInType == "dropdown"){

				var dropdown = element(by.xpath("(//fillin)["+questionIndex+"]/div/select"));
				//var answer = element(by.xpath("(//fillin)["+questionIndex+"]/div/select/option[.='"+answerStr+"']"));
				var submit = element(by.xpath("(//fillin)["+questionIndex+"]/div/button[contains(.,'Submit')]"));
				var answer = element(by.xpath("(//fillin)["+questionIndex+"]/div/select"));
				answer.sendKeys(answerStr);
				//answer.click();
				//browser.driver.executeScript('arguments[0].click();', dropdown.getWebElement());
				//browser.executeScript('arguments[0].click();', answer.getWebElement());
			}
			
				
			browser.executeScript('arguments[0].click();', submit.getWebElement());
			if(isCorrect){
				if(fillInType =="typing"){
					expect(answer.getAttribute('style')).toContain('green');
				}else if(fillInType =="dropdown"){
					expect(dropdown.getAttribute('style')).toContain('green');
				}
			}else{
				if(fillInType == "typing"){
					expect(answer.getAttribute('style')).toContain('red');
				}else if(fillInType == "dropdown"){
					expect(dropdown.getAttribute('style')).toContain('red');
				}
			}
		},360000);

	});

};
