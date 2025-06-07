import { test, expect } from '@playwright/test';

test('WEb Order Login functionality', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx');
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  //Pause on the following line for debugging.
  await page.pause();
  await page.getByRole('button', { name: 'Login' }).click();
  console.log('Clicked on Login button');
  await expect(page.locator('h2')).toContainText('List of All Orders');
  await page.getByRole('link', { name: 'Logout' }).click();
  
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});