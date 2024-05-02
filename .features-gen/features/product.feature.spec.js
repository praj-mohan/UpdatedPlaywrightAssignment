/** Generated from: features/product.feature */
import { test } from "../../steps/fixtures.ts";

test.describe("Purchase", () => {

  test("Navigating Website", async ({ Given, page, When, Then }) => {
    await Given("I am on Swag Labs homepage", null, { page });
    await When("I log in", null, { page });
    await Then("I add stuff to cart", null, { page });
    await Given("I am going to cart", null, { page });
    await When("I remove T-Shirt", null, { page });
    await Then("I check out", null, { page });
    await Given("I put my personal information", null, { page });
    await When("I finished shopping", null, { page });
    await Then("I log out", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features/product.feature"),
});

const testMetaMap = {
  "Navigating Website": {"pickleLocation":"3:5"},
};