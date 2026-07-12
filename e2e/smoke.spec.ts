import { expect, test } from "@playwright/test";

const locales = [
  { code: "ru", path: "/", resume: "/resume/data-analyst-ru.pdf" },
  { code: "en", path: "/en", resume: "/resume/data-analyst-en.pdf" },
] as const;

for (const { code, path, resume } of locales) {
  test(`home page loads and links to the ${code} resume`, async ({
    page,
    request,
  }) => {
    await page.goto(path);
    await expect(page.locator("h1")).toContainText(
      code === "ru" ? "Артём Останин" : "Artyom Ostanin",
    );

    const resumeLink = page.getByRole("link", {
      name: code === "ru" ? "Открыть резюме" : "Open resume",
    });
    await expect(resumeLink).toHaveAttribute("href", resume);

    const response = await request.get(resume);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });
}

test("mobile menu opens and shows navigation links", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "Mobile Safari",
    "hamburger is only rendered/visible below the md breakpoint",
  );

  await page.goto("/");
  await page.getByRole("button", { name: "Открыть меню" }).click();
  await expect(page.getByRole("link", { name: "Проекты" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Контакты" })).toBeVisible();
});

test("warehouse case study loads on both locales", async ({ page }) => {
  await page.goto("/projects/ecommerce-wms-analytics");
  await expect(page.locator("h1")).toContainText("E-commerce и WMS");

  await page.goto("/en/projects/ecommerce-wms-analytics");
  await expect(page.locator("h1")).toContainText("E-commerce & WMS");
});

test("OG images render as PNGs on both locales", async ({ request }) => {
  for (const url of ["/opengraph-image", "/en/opengraph-image"]) {
    const response = await request.get(url);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("image/png");
  }
});

test("sitemap and robots.txt are reachable", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("ecommerce-wms-analytics");

  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Sitemap:");
});
