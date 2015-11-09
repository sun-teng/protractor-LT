exports.config = {
	framework:'jasmine2',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs:['../test/route/quickTest/chooseSample.js'],
	capabilities:{
			'browserName' : 'firefox'
			}
		//,
//	multiCapabilities: [{'browserName': 'chrome'},{'browserName': 'chrome'},{'browserName': 'chrome'},{'browserName': 'chrome'},{'browserName': 'chrome'}]

}
