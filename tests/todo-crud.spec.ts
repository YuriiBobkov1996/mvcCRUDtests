import { test, expect } from './fixtures/todo.fixture';

test('TodoMVC CRUD (one item)', async ({ todoPage }) => {
  const initial = 'buy';
  const updated = 'milk';

  await todoPage.addTodo(initial);
  await expect(todoPage.todoByText(initial)).toBeVisible();

  await todoPage.editTodo(initial, updated);
  await expect(todoPage.todoByText(updated)).toBeVisible();
  await expect(todoPage.todoTextExact(initial)).toHaveCount(0);

  await todoPage.deleteTodo(updated);
  expect(await todoPage.countTodos()).toBe(0);
});
