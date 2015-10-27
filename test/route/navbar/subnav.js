var env = require('../../env.js');
module.exports.gotoRoute = function(routeType){
	//first charactor of routeType  should be uppercase according to the page display
	describe('Global subnav ' + routeType + ' button test', function(){
		it('Clicking on "' + routeType + '" button should go to "'+ routeType + '" page', function(){
			browser.driver.findElement(by.xpath("//div[@id='main-subnav']/ul/li/a[text()='" + routeType + "']")).click();
			switch(routeType){
				case 'Learner':
					expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/canvas');
					break;
				case 'Mentor':
					expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/mentor');
					break;
				case 'Roleplayer':
					expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/roleplayer');
					break;
				case 'Peer':
					expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/peer');
					break;
				case 'Admin':
					expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/admin');
					break;
				case 'Leader':
					expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/leader');
					break;
			}

		});
	});
};
