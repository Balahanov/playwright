const { defineConfig, devices } = require('@playwright/test')
const dotenv = require('dotenv');


 function prepareEnvConfig() {
  // common configuration
  let config = {
    trace: 'on-first-retry'
  };
  // prevent rewriting env var if it was set in terminal
  if (!process.env.ENV) dotenv.config();
  console.log('\x1b[33mCurrent enviroment is - ' + '\x1b[32m"' + process.env.ENV + '"\x1b[0m');
  // set configuration depend on env
  if (process.env.ENV == 'dev') config.baseURL = 'http://the-internet.herokuapp.com';
  else if (process.env.ENV == 'prod') config.baseURL = 'http://prod.the-internet.herokuapp.com';
  return config;
}

 function prepareDeviceConfig(browser = 'chrome') {
  let config = [];
  const chrome = { name: browser, use: { ...devices['Desktop Chrome'] }, };
  const firefox = { name: browser, use: { ...devices['Desktop Firefox'] }, };
  const safari = { name: browser, use: { ...devices['Desktop Safari'] }, };
  const edge = { name: browser, use: { ...devices['Desktop Edge'] }, };

  console.log(Object.keys(devices).toLocaleString())
  if (browser == 'chrome') config.push(chrome);
  else if (browser == 'firefox') config.push(firefox);
  else if (browser == 'safari') config.push(safari);
  else if (browser == 'edge') config.push(edge);
  else if (browser == 'all') config.push([chrome, firefox, safari]);
  else config.push({ name: browser, use: { ...devices[browser] }, });
  console.log(config)
  return config;
}
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: prepareEnvConfig(),
  /* Configure projects for major browsers */
  projects: prepareDeviceConfig(process.env.DEVICE)
  // [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  // {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },

  // {
  //   name: 'webkit',
  //   use: { ...devices['Desktop Safari'] },
  // },

  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

