import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 20000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  trashAssetsBeforeRuns: true,
  retries: {
    runMode: 1,
    openMode: 0,
  },

  e2e: {
    baseUrl: 'https://saucedemo.com/',
    specPattern: 'cypress/tests/**.spec.ts',
    numTestsKeptInMemory: 5,
    experimentalMemoryManagement: true,
    chromeWebSecurity: false
  },
});
