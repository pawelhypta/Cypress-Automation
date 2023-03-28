describe("Action to select option from the dropdown list", () => {
  it("Select option from dropdown list", () => {
    cy.visit("/");
    cy.contains(".sf-with-ul", "Women").click();
  });
});
