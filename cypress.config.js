const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1du63z',
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: 'https://tapsshop.pl/',
    },
});
