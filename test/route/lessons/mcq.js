var env = require('../../env.js');

var waitTime = 1000;



module.exports.doMCQ= function(questionIndex,answerStr,isCorrect){
	questionIndex = questionIndex + 1;//xpath index are 1 based instead of zero based
	describe('Testing mcq directive =>', function(){
		it('Choose and submit an MCQ from a substep should give a right or wrong reply', function(){
			
			var answer = element(by.xpath("//questionmc[position()="+questionIndex+"]/div/div[./div/div/label/p[contains(.,'"+answerStr+"')]]/div/div/input"));
			var submit = element(by.xpath("//questionmc[position()="+questionIndex+"]/div[./div/div/div/label/p[contains(.,'"+answerStr+"')]]/button[contains(.,'Submit')]"));
			browser.executeScript('arguments[0].click();', answer.getWebElement());
			browser.executeScript('arguments[0].click();', submit.getWebElement());
			
			browser.driver.sleep(waitTime);
			if(isCorrect){
				expect(element(by.xpath("//questionmc[position()="+questionIndex+"]/div[./div/div/div/label/p[contains(.,'"+answerStr+"')]]/label")).getText()).toBe('Correct answer!');
			}else{
				expect(element(by.xpath("//questionmc[position()="+questionIndex+"]/div[./div/div/div/label/p[contains(.,'"+answerStr+"')]]/label")).getText()).toBe('Wrong answer!');	
			}
			
		},360000);

	});

};
