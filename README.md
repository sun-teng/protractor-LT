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
  protractor ./quickTestConf/explode.js
```
>This would run, and a firefox browser would popup and execute a series of action by itself.
>Please note that you need to run `webdriver-manager start` in the background for things to work, it is the selenium webdrivers that doing the user-interactions for you.
>Also, please have firefox installed as the lastest chrome-update seems to have some issues with protractor.

3.How to write your own scripts

I. Once again, go check out [protractor tutorial](https://angular.github.io/protractor/#/)

II. Read on how to use [xpath](http://www.w3schools.com/xsl/xpath_intro.asp), since there will be a lot of times we will using `browser.driver.findElement(by.xpath("`-the xpath here-`"));` for getting the DOM elements to interact with

III. Organization of the scripts: 
- The test scripts for LT is organized in a reusable fashion
  - In brief: conf.js -> Scenario -> User -> Route
  - For the actual test: `protractor conf.js` ---checks---> `conf.js` ---runs---> Scenario scripts ---import&call---> User scripts ---import&call---> Route scripts
  - For "testing the test scripts": `protractor ./quickTestConf/explode.js` ---checks---> `./quickTestConf/explode.js` ---runs---> `./test/route/quickTest/quickTestExplode.js` ---import&call---> `./test/route/exploder/exploderXML.js`

  
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
  - They call methods in route scripts imported from `./test/route/*/`
  - In charge of a sequence of interactions made by one user in one login/logout session 
- Route scripts:
  - Found under `./test/route/*/`
  - They specify what actions can be performed and tested in a specific page(or under a specific URL route)
- Test data:
  - Found under `./test/data/*/`
  - Provides user data, lesson data, etc as params for some of the scenario, user and route scripts. 
- env.js:
  - Found under `./test/env.js`
  - Change the domain string to 'https://localhost:4000' for local testing or the URL of the live site for live testing 
- quickTestConf scripts:
  - Found under `./quickTestConf/`
  - the protractor conf file for quick testing, calls script in `./test/route/quickTest/`, which in turn import and call other work-in-progress route scripts.
  
IV. Write your own scripts:
- Find which page under `./test/route/` you know best, and open that folder. The folder names in `./test/route/` are actually page names. e.g. `./test/route/canvas` means the canvas page. Folder names here can also mean partials that are share among all other pages. e.g. `./test/route/navbar` means the top navigation bar.
- When you are in the the `./test/route/*/` folder, you will see a bunch of javascript files. Every javascript file you see here corresponds to a view-component on the front-end. e.g. `./test/route/lessons/chooseMentor.js` corresponds to the choose mentor substep view component.
- Open a view-component javascript file under `./test/route/*/`, to see what tests can be done to that view-component, or add a new view-component javascript file if the view-component is not yet present.
- Edit methods or add more methods to the view-component javascript file to add what test that can be done.
- Go to `./test/route/quickTest/` and add a new quickTestScript by cloning `./test/route/quickTest/quickTest.js` and renaming it to whatever you like e.g. `./test/route/quickTest/quickTestExplode.js`. This is used as scaffold for quickly "test your route test scripts", because testing features like "explode xml" would require some extra step(like logging in) before explode can be done. Running the `./test/route/*/*.js` files would not work directly since the browser is would be at the log in page and not at the explode page. In this case, the `quickTest.js` file would set the stage by calling other methods such as logging in as a user and going to a specific URL, so that you are at the right page to test what you have written. 
- Once you have the `./test/route/quickTest/quickTest*.js` set up, import the specific `./test/route/*/*.js` that you needed into the `./test/route/quickTest/quickTest*.js` file and call the method you have written from the specific `./test/route/*/*.js` file.  e.g. `./test/route/quickTest/quickTestExplode.js` would import `./test/route/exploder/explodeXML.js` and call the `.explode()` method.
- Go to `./quickTestConf/` and clone an existing `./quickTestConf/*.js` file. Rename it and change the filepath in `specs:[]` field to `./test/route/quickTest/quickTest*.js`.
- Open a new terminal/commmand at the at the protractor-LT home dir and start the quickTestConf
`protractor ./quickTestConf/`-fileCreatedPreviously-`.js`

>(Note) If protractor did not run, please make sure that webdriver is currently started in the background. Open terminal/command and start the webdriver-manager if it has yet started
```
webdriver-manager start
```

- Sit back, relax, and sip some wine. While you see the browser comes to life by itself.

V. Contributing
- Same procedure as LT
- Please squash and create PR from master branch

VI. Coming soon
- lesson test object
- batch/bash script for creating and running the quick test files ( Windows version done.........)


 

  
