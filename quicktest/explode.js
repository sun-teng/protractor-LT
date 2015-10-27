exports.config = {
	framework:'jasmine2',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs:['../test/route/quickTest/quickTestExplode.js'],
	capabilities:{'browserName':'firefox'},
	allScriptsTimeout:60000
		//,
//	multiCapabilities: [{'browserName': 'chrome'},{'browserName': 'chrome'},{'browserName': 'chrome'},{'browserName': 'chrome'},{'browserName': 'chrome'}]

}
