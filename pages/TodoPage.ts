import { expect, Locator, Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.locator('input.new-todo');
    this.todoItems = page.locator('ul.todo-list > li');
  }

  async open() {
    await this.page.goto('/todomvc/#/');
    console.log('Opened URL:', this.page.url());
    await expect(this.newTodoInput).toBeVisible();
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
    await expect(this.todoByText(text)).toBeVisible();
  }

  todoByText(text: string) {
    return this.todoItems.filter({ hasText: text }).first();
  }

  todoTextExact(text: string) {
    return this.page.getByText(text, { exact: true });
  }

  async editTodo(oldText: string, newText: string) {
    const item = this.todoByText(oldText);
    await expect(item).toBeVisible();
    await item.locator('label').dblclick();
    const editInput = item.locator('input.edit');
    await expect(editInput).toBeVisible();
    await editInput.fill(newText);
    await editInput.press('Enter');
    await expect(this.todoByText(newText)).toBeVisible();
  }

  async deleteTodo(text: string) {
    const item = this.todoByText(text);
    await expect(item).toBeVisible();
    await item.hover();
    await item.locator('button.destroy').click();
    await expect(this.todoByText(text)).toHaveCount(0);
  }

  async countTodos() {
    return this.todoItems.count();
  }
}
