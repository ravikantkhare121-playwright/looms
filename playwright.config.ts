import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 120000,

  retries: 0,

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    baseURL: 'https://www.loomfashion.co.in/'
  },

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  projects: [
  {
    name: 'chromium',

    use: {
      browserName: 'chromium',
      headless: false,
    },
  },]

});