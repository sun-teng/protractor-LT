var env = require('../../env.js');
module.exports.chooseMentor = function(mentor,lesson){
	describe('Mentor chooser directive =>', function(){
		it('Invite a mentor', function(){
			//browser.driver.get(env.domain + '/learntogether/lesson/'+lesson.id);//this should come from a config file
			browser.driver.findElement(by.xpath("//li[text()[contains(.,'Choose a Mentor')]]")).click();
			browser.driver.sleep(1000);
			browser.driver.findElement(by.xpath("//*[text()[contains(.,'"+mentor.name+"')]]")).click();
			browser.driver.sleep(1000);
			element(by.xpath("(//div[div='Mentor']/div[@ng-repeat='role in relationship.roles']/div/div)[1]")).click();	
			element(by.xpath("//button[text()='INVITE CHOSEN']")).click();	
			
			/*element.all(by.repeater('relationship in manager.relationships')).then(function(relationships){
				console.log('Test');
				for(var i = 0; i < relationships.length; i++){
					console.log('Test inner');
					console.log('rel len:' + relationships.length);
					if(relationships[i].element(by.xpath("//*[div='Mentor']"))){
						console.log('Testing deep');
						relationships[i].all(by.repeater('role in relationship.roles')).then(function(roles){
							roles[0].element(by.xpath("//*[text()='+']")).click();
							browser.driver.sleep(3000);
							roles[0].element(by.xpath("//*[text()='INVITE CHOSEN']")).click();
						});	
					}
				}
			});*/
			browser.driver.sleep(1000);
			//expect(browser.driver.getCurrentUrl()).toBe('https://localhost:4000/learntogether/canvas');
		},60000);

	});

};

module.exports.deleteMentor = function(mentor,lesson){
	describe('Mentor chooser', function(){
		it('Invite a mentor', function(){
			browser.driver.get(env.domain + '/learntogether/lesson/'+lesson.id);//this should come from a config file
			browser.driver.findElement(by.xpath("//*[text()[contains(.,'Choose a Mentor')]]")).click();
			browser.driver.sleep(3000);
			browser.driver.findElement(by.xpath("//*[text()[contains(.,'"+mentor.name+"')]]")).click();
			browser.driver.sleep(3000);
			console.log('test outer');
			element.all(by.repeater('relationship in manager.relationships')).then(function(relationships){
				console.log('Test');
				for(var i = 0; i < relationships.length; i++){
					console.log('Test inner');
					console.log('rel len:' + relationships.length);
					if(relationships[i].element(by.xpath("//*[div='Mentor']"))){
						console.log('Testing deep');
						relationships[i].all(by.repeater('role in relationship.roles')).then(function(roles){
							roles[0].element(by.xpath("//*[text()='+']")).click();
							browser.driver.sleep(3000);
							roles[0].element(by.xpath("//*[text()='DELETE']")).click();
						});	
					}
				}
			});
			browser.driver.sleep(1000);
			//expect(browser.driver.getCurrentUrl()).toBe('https://localhost:4000/learntogether/canvas');
		},60000);

	});

};

