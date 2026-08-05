# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hello.spec.js >> hello world test
- Location: tests\hello.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1 | const { test, expect } = require('@playwright/test');
  2 | 
  3 | test('hello world test', async ({ page }) => {
> 4 |     await page.goto('http://localhost:3000'); // Replace with your application's URL
    |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  5 |     const title = await page.title();
  6 |     expect(title).toBe('Expected Title'); // Replace with the expected title of your application
  7 | });
```