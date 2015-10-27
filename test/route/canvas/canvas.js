var env = require('../../env.js');
module.exports.goIntoLesson = function(lesson){
describe('Test canvas directive =>', function(){
		it('user should already be in canvas route', function(){
			expect(browser.driver.getCurrentUrl()).toBe(env.domain + '/learntogether/canvas');
		});
		it('clicking on a lessons node should go into a lesson', function(){
			//browser.driver.get(env.domain + '/learntogether/canvas');	
			browser.driver.findElement(by.xpath("//*[div[@class='title']='"+ lesson.name +"' and div[@class='level']='"+ lesson.level +"']")).click();
			browser.driver.sleep(13000);
			expect(browser.driver.getCurrentUrl()).toBe(env.domain + '/learntogether/lesson/'+lesson.id);

		});
	});

};


