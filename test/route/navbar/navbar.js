var env = require('../../env.js');

module.exports.logout = function(){
describe('Global navbar logout button test =>', function(){
		it('Clicking on logout button should log out', function(){
			browser.driver.findElement(by.xpath("//*/ul[@class='nav navbar-nav navbar-right']/li/a[./i[@class='fa fa-sign-out']]")).click();
			browser.driver.sleep(3000);
			expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/auth/login');
		});
	});

};



module.exports.gotoLearnerHome = function(){
	describe('global navbar logo button test =>', function(){
		it('clicking on the logo should reroute back to the homepage',function(){
			browser.driver.findElement(by.xpath("//div[@class='navbar-header']/a[@class='navbar-brand']")).click();
			browser.driver.sleep(3000);
			expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/canvas');
		});
	});
};

module.exports.gotoProfile = function(){
	describe("Global navbar profile button test", function(){
		it("Clicking on the profile button should go to profile page", function(){
			browser.driver.findElement(by.xpath("//*/ul[@class='nav navbar-nav navbar-right']/li/a[@class='user-icon']")).click();
			expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/profile');
		});
	});
};
module.exports.gotoNetwork = function(){
	describe("Global navbar network button test", function(){
		it("Clicking on the network button should go to network page", function(){
			browser.driver.findElement(by.xpath("//*/ul[@class='nav navbar-nav navbar-right']/li/a[./i[@class='fa fa-share-alt']]")).click();
			expect(browser.driver.getCurrentUrl()).toBe(env.domain+'/learntogether/network');
		});
	});
};
