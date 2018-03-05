//Take a look at example application structure in this example. I assume you have same structure.

npm init
  Initialize your project
npm install --save-dev mocha
npm install --save-dev should

//Edit package.json in order to add following
  "scripts": {
      "test": "mocha test/unit"
    }
//Run following command at the root of your application in order to run tests you've written.
  npm test