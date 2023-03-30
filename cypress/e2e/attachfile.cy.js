describe("E2E - file upload", () => {
  it("uploading file in the contact us tab", () => {
    cy.visit("/");
    cy.contains(`[title="Contact us"]`, "Contact us").click();
    cy.get("#fileUpload").attachFile("../fixtures/cypress-logo.png");
    cy.get("span.filename").should("contain", "cypress-logo.png");
  });
});
