# protractor-LT
E2E testing for LearnTogether, for protractor tutorials click [here](https://angular.github.io/protractor/#/)

1.To setup protractor, open terminal/command and type the following:
```
  npm install -g protractor  
  webdriver-manager update
  webdriver-manager start
```
>This will install protractor (a nodejs package) globally on your machine, 
then updates the selenium webdriver (more on this later), 
and runs the selenium webdriver.

2.To see protractor in action

I.Open terminal/command and type the following in the learntogether folder:
```
  make install
  make start
```
>This should set learntogether to pre-explode status.

II.Change directory to the protractor-LT home folder then type the following in the terminal/command:
```
  protractor ./quickTest/explode.js
```
>This would run, and a firefox browser would popup and execute a series of action by itself.
>Please note that you need to run `webdriver-manager start` in the background for things to work, it is the selenium webdrivers that doing the user-interactions for you.
>Also, please have firefox installed as the lastest chrome-update seems to have some issues with protractor.

3.How to write your own scripts

I. Once again, go checkout [protractor tutorial](https://angular.github.io/protractor/#/)

II. Read on how to use [xpath](http://www.w3schools.com/xsl/xpath_intro.asp), since we will be using `browser.driver.findElement(by.xpath("`-the xpath here-`"));` for getting the DOM elements to interact with

III. Organization of the scripts: 
- The test scripts for LT is organized in a reusable fashion
  - In brief: conf.js -> Scenario -> User -> Route
  - For the actual test: `protractor conf.js` ---checks---> `conf.js` ---runs---> Scenario scripts ---import&call---> User scripts ---import&call---> Route scripts
  - For the quick-testing of features, i.e testing the explode function, as well as "testing the test scripts": `protractor ./quicktest/explode.js` ---checks---> `./quicktest/explode.js` ---runs---> `./test/route/quickTest/quickTestExplode.js` ---import&call---> `./test/route/exploder/exploderXML.js`

  
- Protractor conf file:
  - Found under `./conf.js` 
  - It specifies what browsers to use, how many browser instances, and what scenario scripts to run, among other things
  - Ultimately, it should include all the file paths of scenario scripts ready for testing in the `specs:[]` 
- Scenario scripts:
  - Found under `./test/scenario`
  - They get test data from `./test/data` and calls methods in user scripts imported from `./test/user`
  - They are the top level scripts, and would be run by protractor when refered to in the conf.js
  - In charge of a specific scenario that requires multiple logins or multi-user interaction
- User scripts:
  - Found under `./test/user`
  - They call methods in route scripts imported from `./test/route`
  - In charge of a sequence of interactions made by one user in one login/logout session 
- Route scripts:
  - Found under `./test/route` and `./test/route/*/`
  - They specify what actions can be performed and tested in a specific page(or under a specific URL route)
- Test data:
  - Found under `./test/data` and `./test/data/*/`
  - Provides user data, lesson data, etc as params for some of the scenario, user and route scripts. 
- env.js:
  - Found under `./test/env.js`
  - Change the domain string to 'https://localhost:4000' for local testing or the URL of the live site for live testing 
- quickTestConf scripts:
  - Found under `./quickTestConf/`
  - the protractor conf file for quick testing, calls script in `./test/route/quickTest/`, which in turn import and call other work-in-progress route scripts.





 

  
