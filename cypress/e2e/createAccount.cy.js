import { faker } from "@faker-js/faker";

const randomName = faker.name.firstName();

describe("E2E - locators", () => {
  it("Locators", () => {
    cy.visit("/");
    cy.contains(".login", "Sign in").click();
    cy.url().should(
      "include",
      "/index.php?controller=authentication&back=my-account"
    );
    cy.get("#email_create").type(`pawel.qtf+${randomName}@gmail.com`);
    cy.get("#SubmitCreate").click();
  });
});
