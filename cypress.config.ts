import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: 'cypress/screenshotsFolder',
  videosFolder: 'cypress/videosFolder',
  pageLoadTimeout: 150000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on);

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'electron' && browser.isHeadless) {
          launchOptions.preferences.width = 1920;
          launchOptions.preferences.height = 1080;
        }

        return launchOptions;
      });
    },
    baseUrl: `http://localhost:3000/${process.env.CYPRESS_LOCALE || 'uk'}`,
    video: false,
  },
});
