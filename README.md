# protractor-LT
E2E testing for LearnTogether

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

II.Change directory to the protractor-LT home folder then type the following in the terminal/commmand:
```
  protractor ./quickTest/explode.js
```
>This would run, and a firefox browser would popup and execute a series of action by itself.
>Please note that you need to run `webdriver-manager start` in the back ground for things to work.
>Also, please have firefox installed as the lastest chrome-update seems to have some issues with protractor.
 
