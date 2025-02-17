const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Gettr Wep App Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    reportFilename: "Report-[datetime]-report",
    timestamp: "longDate"
  },
  e2e: {
    baseUrl: "https://qa4-cc.gettr-qa.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 30000,
    experimentalMemoryManagement: true,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      qa4: "https://qa4.gettr-qa.com",
      stg: "https://stg.gettr.com",
      prod: "https://gettr.com",
    },
    users: {
      user1: {
        userEmail: "johnwick@yopmail.com",
        password: "Boring@123",
        username: "johnwick884"
      },
      user2: {
        userEmail: "hannahgratt@yopmail.com",
        password: "Boring@123",
      },
      user3: {
        userEmail: "test3@guerrillamail.com",// forgot password 
        password: "boring@312",
      },
      user4: {
        userEmail: "johnwick1@guerrillamail.com",// registerd mail on gettr
        password: "boring@123",
        username: "john1_1857"
      },
      user5: {
        userEmail: "live_wenxia",// registerd mail on gettr having all features 
        password: "!live_wenxia",
        username: "live_wenxia0000"
      },
    },
  },
});
