describe("Inputs", () => {
  it("filling out/clearing inputs", () => {
    cy.visit("https://mice-frontend.herokuapp.com");
    cy.contains(".login__loginButton", "Login with Okta").click();
    cy.origin("https://external-dev.sso.plume.com", () => {
      cy.get(".o-form-input-name-username").type("pawel.qtf+aadmin@gmail.com");
      cy.get("#idp-discovery-submit").click();
      cy.get("#okta-signin-password").type("Qtfqtf123!");
      cy.get("#okta-signin-submit").click();
    });
    cy.wait(500);
    cy.get(".select-company__searchInput").type("Company A");
  });
});
