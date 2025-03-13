import { test, expect } from '@playwright/test';

// Example test suite
test.describe('Example tests', () => {
  // Setup - runs before each test in this describe block
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test
    await page.goto('/');
  });

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring
    await expect(page).toHaveTitle(/Next.js/);
  });

  test('navigation works', async ({ page }) => {
    // Find an element and click it
    await page.getByRole('link', { name: /get started/i }).click();
    
    // Assert URL has changed
    await expect(page).toHaveURL(/.*documentation/);
  });

  test('can interact with forms', async ({ page }) => {
    // Create a test input if your app has a form
    // This is an example - modify according to your app's structure
    await page.getByPlaceholder('Search...').fill('test input');
    await page.getByPlaceholder('Search...').press('Enter');
    
    // Assert something happened after form submission
    // await expect(page.getByText('Results for: test input')).toBeVisible();
  });

  test('can use locators effectively', async ({ page }) => {
    // Examples of different ways to locate elements
    const byRole = page.getByRole('heading', { name: /welcome/i });
    const byText = page.getByText('Learn');
    const byTestId = page.getByTestId('hero-section');
    
    // Check if at least one of these elements is visible
    await expect(byRole.or(byText).or(byTestId)).toBeVisible();
  });
});