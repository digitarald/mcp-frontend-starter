import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');
    
    // Verify that the page loaded
    await expect(page).toHaveTitle(/Next.js/);
    
    // Take a screenshot for visual verification
    await page.screenshot({ path: 'homepage.png' });
  });
});