import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // The avatar is a remote GitHub image; keep tests hermetic.
  await page.route("https://github.com/**", (r) => r.fulfill({ status: 200, contentType: "image/png", body: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGNgYGD4DwABBAEAX+XDSwAAAABJRU5ErkJggg==", "base64") }));
});

test("hero states what Adarsh does and has a working primary action", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Adarsh S/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("attackers do.");
  await page.getByRole("link", { name: "See the projects" }).click();
  await expect(page.locator("#projects")).toBeInViewport();
});

test("no QSL projects are listed", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Show all/ }).click();
  const text = (await page.locator("[data-testid=project-grid]").innerText()).toLowerCase();
  expect(text).not.toContain("qsl");
});

test("project filter and show-all work", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator("[data-testid=project-grid] a");
  await expect(cards).toHaveCount(12);
  await page.getByRole("button", { name: /Show all/ }).click();
  await expect(cards).toHaveCount(30);
  await page.getByRole("button", { name: "Wireless & Hardware" }).click();
  await expect(cards).toHaveCount(3);
  await expect(page.getByRole("button", { name: "Wireless & Hardware" })).toHaveAttribute("aria-pressed", "true");
});

test("every project link goes to the 0x0806 GitHub account", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Show all/ }).click();
  const hrefs = await page.locator("[data-testid=project-grid] a").evaluateAll((a) => a.map((x) => (x as HTMLAnchorElement).href));
  for (const h of hrefs) expect(h).toMatch(/^https:\/\/github\.com\/0x0806\//);
});

test("contact form validates, then opens a mailto", async ({ page }) => {
  await page.goto("/");
  const submit = page.getByRole("button", { name: /Open in my email app/ });
  await submit.click();
  await expect(page.getByText("Enter your name.")).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await expect(page.getByLabel("Your name")).toBeFocused();

  await page.getByLabel("Your name").fill("Test User");
  await page.getByLabel("Email address").fill("test@example.com");
  await page.getByLabel("What should I look at?").fill("Please assess our web app.");
  await page.route("mailto:*", (r) => r.abort());
  await submit.click();
  await expect(page.getByText("Enter your name.")).toHaveCount(0);
  await expect(page.getByRole("status")).toContainText("email app should open");
});

test("no horizontal overflow and no dead links", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  const dead = await page.locator('a[href="#"], a:not([href])').count();
  expect(dead).toBe(0);
});

test("keyboard: skip link is first tab stop and reaches main", async ({ page, isMobile }) => {
  test.skip(isMobile, "keyboard flow is desktop only");
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("mobile menu toggles, exposes state and closes on Escape", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  const btn = page.getByRole("button", { name: "Open menu" });
  await expect(btn).toHaveAttribute("aria-expanded", "false");
  await btn.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#mobile-menu").getByRole("link", { name: "Client work" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).toBeHidden();
});

test("reduced motion shows all content without animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "See the projects" })).toBeVisible();
});

test("has structured data, canonical and skip-friendly landmarks", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main#main")).toHaveCount(1);
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
});

test("client work links to the two live sites", async ({ page }) => {
  await page.goto("/");
  const hrefs = await page.locator("[data-testid=works-grid] h3 + p + div a:first-child").evaluateAll((a) => a.map((x) => (x as HTMLAnchorElement).href));
  expect(hrefs).toEqual(["https://www.energyhub.cafe/", "https://lifestylegym.fit/"]);
});

test("recognition lists the vendor halls of fame and bounty platforms", async ({ page }) => {
  await page.goto("/");
  const sec = page.locator("#recognition");
  for (const n of ["India Book of Records", "Microsoft MSRC", "Amazon Web Services", "Oracle", "HackerOne", "Bugcrowd", "YesWeHack"]) {
    await expect(sec.getByText(n, { exact: true })).toBeVisible();
  }
});

test("IBR record states the verified achievement", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#recognition")).toContainText("119 critical web vulnerabilities in 3 hours");
});

test("hero leads with the IBR record and links to recognition", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "India Book of Records achiever" }).click();
  await expect(page.locator("#recognition")).toBeInViewport();
});

test("no forks and no THRIII in the featured work", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#works")).not.toContainText("THRIII");
  await page.getByRole("button", { name: /Show all/ }).click();
  await expect(page.locator("[data-testid=project-grid]")).not.toContainText("Fork");
});
