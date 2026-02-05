# TodoMVC CRUD Automation (Playwright + TypeScript)

UI automation for TodoMVC demo app CRUD flow using **Playwright + TypeScript** with **Page Object Model (POM)**.  
Includes **Allure reporting**, **ESLint + Prettier**, **Husky pre-push hook**, and **GitHub Actions CI**.

Target app: `https://demo.playwright.dev/todomvc/#/`

---

## Tech Stack & Versions

**Stack:**
- Playwright (`@playwright/test`)
- TypeScript
- Allure Reporter (`allure-playwright` + `allure-commandline`)
- ESLint (flat config) + Prettier
- Husky (pre-push hook)
- GitHub Actions CI

**Check versions locally:**
```bash
node -v
npm -v
npx playwright --version
npx tsc -v
npx eslint -v
npx prettier -v
npx allure --version
```

Run Tests Locally

Install:
```bash
npm ci
npx playwright install
```

Run all tests:
```bash
npm test
```
Run one spec:
```bash
npx playwright test tests/todo-crud.spec.ts
```

Run headed:
```bash
npx playwright test --headed
```

Configure Base URL & Environment Variables

Create .env in project root:
```bash
BASE_URL=https://demo.playwright.dev/todomvc/#/
```

Example file:
```bash
.env.example
```
Override for a single run:

Windows PowerShell:
```bash
$env:BASE_URL="https://demo.playwright.dev/todomvc/#/"; 
npm test
```


Git Bash / Linux / macOS:
```bash
BASE_URL="https://demo.playwright.dev/todomvc/#/" 
npm test
```bash
Allure Reporting

Run tests (results saved to allure-results/):
```bash
npm test
```


Generate report:
```bash
npm run allure:generate
```

Open report locally:
```bash
npm run allure:open
```
Linting & Formatting

Lint:
```bash
npm run lint
```

Fix lint:
```bash
npm run lint -- --fix
```

Format:
```bash
npm run format
```
Git Hooks (Husky)

Pre-push hook blocks pushes if lint fails:
```bash
.husky/pre-push → npm run lint
```
If hooks aren’t active after clone:
```bash
npm run prepare
```
GitHub Actions CI

Workflow:

.github/workflows/ci.yml

CI steps:

install deps (npm ci)

install browsers (npx playwright install --with-deps)

lint

tests

upload artifacts:

playwright-report/

test-results/

allure-results/

allure-report/

Examples of Results (Screenshots / Logs)
Example console output
Running 1 test using 1 worker
✓ 1 passed (4.3s)

Example failure artifacts

On failure Playwright stores:

Screenshot: test-results/**/test-failed-1.png

Trace: test-results/**/trace.zip

View trace:

npx playwright show-trace test-results/**/trace.zip

Example reports output

Playwright HTML report: playwright-report/ (open via npx playwright show-report)

Allure raw results: allure-results/

Allure report: allure-report/

Notes

POM: pages/TodoPage.ts

Fixtures: tests/fixtures/todo.fixture.ts

CRUD spec: tests/todo-crud.spec.ts
