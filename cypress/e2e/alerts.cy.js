describe("E2E - Alerts", () => {
  it("Alerts", () => {
    cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
    cy.get("#alert").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Przykładowa treść alertu");
    });
  });
  it("Alert confirm", () => {
    cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
    cy.get("#alert-confirm").click();
    cy.on("window:confirm", (confirmAlertText) => {
      expect(confirmAlertText).to.equal(`Zaakceptuj aby kontynuować!`);
    });
    cy.on("window:confirm", () => false);
  });
});
