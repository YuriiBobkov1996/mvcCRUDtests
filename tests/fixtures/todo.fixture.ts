import { test as base, expect } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';

type Fixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<Fixtures>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.open();
    await use(todoPage);
  },
});

export { expect };
