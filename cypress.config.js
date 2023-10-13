const { defineConfig } = require("cypress");


module.exports = defineConfig({
    defaultCommandTimeout: 6000,
   "reporter": "cypress-mochawesome-reporter", //for html reports
   "reporterOptions":{
     "loglevel":'info'


   },
  env:{
    allureResultsPath: "target/allure-results",
    url : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    username : "Admin",
    password : "admin123",
    username1: "Admin1"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    //experimentalSessionAndOrigin:true,
    specPattern:'cypress/e2e/**/*spec.js'
  },
});