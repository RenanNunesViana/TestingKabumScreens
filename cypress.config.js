const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    env:{
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
      USER_FIRST_NAME: process.env.CYPRESS_USER_FIRST_NAME,
    },
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});
