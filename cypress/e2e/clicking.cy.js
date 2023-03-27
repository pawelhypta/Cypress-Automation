describe("E2E - locators", () => {
  it("Locators", () => {
    cy.visit("/");
    cy.contains(`[title="Contact us"]`, "Contact us").click();
    cy.get(".icon-home").click();
  });
});
