import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

console.log('BASE_URL from env:', process.env.BASE_URL);

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    launchOptions: {
      slowMo: 300,
    },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['line'], ['allure-playwright', { outputFolder: 'allure-results' }]],
});
