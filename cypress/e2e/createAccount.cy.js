describe("E2E - locators", () => {
  it("Locators", () => {
    cy.visit("/");
    cy.contains(".login", "Sign in").click();
    cy.url().should(
      "include",
      "/index.php?controller=authentication&back=my-account"
    );
    cy.get("#email_create").type("pawel.qtf+thisisatest@gmail.com");
    cy.get("#SubmitCreate").click();
  });
});
