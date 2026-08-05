const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const cubePageUrl = pathToFileURL(path.join(__dirname, '..', 'cube.html')).href;

test.describe('Cube It page', () => {
  test('loads the cube page and shows UI elements', async ({ page }) => {
    await page.goto(cubePageUrl);
    await expect(page.locator('h1')).toHaveText('Cube It');
    await expect(page.locator('#numberInput')).toBeVisible();
    await expect(page.locator('#cubeButton')).toHaveText('CubeIt');
  });

  test('computes the cube of a positive number', async ({ page }) => {
    await page.goto(cubePageUrl);
    await page.fill('#numberInput', '3');
    await page.click('#cubeButton');
    await expect(page.locator('#result')).toHaveText('Cube of 3 is 27.');
  });

  test('computes the cube of a decimal number', async ({ page }) => {
    await page.goto(cubePageUrl);
    await page.fill('#numberInput', '2.5');
    await page.click('#cubeButton');
    await expect(page.locator('#result')).toHaveText('Cube of 2.5 is 15.625.');
  });

  test('shows an error for invalid input', async ({ page }) => {
    await page.goto(cubePageUrl);
    await page.fill('#numberInput', '');
    await page.click('#cubeButton');
    await expect(page.locator('#result')).toHaveText('Please enter a valid number.');
  });
});
