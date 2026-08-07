/// <reference types="node" />

import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',

  timeout: 30 * 1000,

  retries: 0,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  use: {
    headless: true,

    viewport: {
      width: 1280,
      height: 720
    },

    actionTimeout: 10 * 1000,

    ignoreHTTPSErrors: true,

    video: 'off',

    baseURL: 'http://127.0.0.1:4173',
  },

  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4173',

    url: 'http://127.0.0.1:4173',

    reuseExistingServer: !process.env.CI,

    timeout: 60 * 1000,
  },
};

export default config;