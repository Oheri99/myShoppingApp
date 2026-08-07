import { test, expect } from '@playwright/test';

test.describe.serial('Shopping list app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should add multiple items and preserve them after reload', async ({ page }) => {
    const itemInput = page.getByPlaceholder('Add shopping item');
    const addButton = page.getByRole('button', { name: 'Add' });

    await itemInput.fill('Apples');
    await addButton.click();

    await itemInput.fill('Bananas');
    await addButton.click();

    await expect(page.getByText('Apples')).toBeVisible();
    await expect(page.getByText('Bananas')).toBeVisible();

    await page.waitForFunction(() => {
      const stored = localStorage.getItem('shopping-list-items');
      return stored?.includes('Apples') && stored?.includes('Bananas');
    });

    await page.reload();

    await expect(page.getByText('Apples')).toBeVisible();
    await expect(page.getByText('Bananas')).toBeVisible();

    await page.waitForTimeout(3000);
  });

  test('should complete, edit, and delete an item', async ({ page }) => {
    const itemInput = page.getByPlaceholder('Add shopping item');
    const addButton = page.getByRole('button', { name: 'Add' });

    await itemInput.fill('Apples');
    await addButton.click();

    const completeButton = page.getByRole('button', { name: /mark apples as complete/i });
    await completeButton.click();
    await expect(page.getByRole('button', { name: /mark apples as incomplete/i })).toBeVisible();

    const editButton = page.getByRole('button', { name: /edit/i }).first();
    await editButton.click();

    const editInput = page.getByPlaceholder('Edit item');
    await editInput.fill('Green apples');
    await page.getByRole('button', { name: /save/i }).click();
    await expect(page.getByText('Green apples')).toBeVisible();

    await page.waitForTimeout(3000);
    const deleteButton = page.getByRole('button', { name: /delete/i }).first();
    await deleteButton.click();

    await expect(page.getByText('Your shopping list is empty.')).toBeVisible();
  });
});
