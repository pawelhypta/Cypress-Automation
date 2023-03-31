describe("Test cases to check RBAC hierarchy of the Portal company", () => {
  it("Switching the companies and checking parent companies", () => {
    //Login into the Portal application
    cy.visit("https://mice-frontend.herokuapp.com");
    cy.contains(".login__loginButton", "Login with Okta").click();
    cy.origin("https://external-dev.sso.plume.com", () => {
      cy.get(".o-form-input-name-username").type("pawel.qtf+aadmin@gmail.com");
      cy.get("#idp-discovery-submit").click();
      cy.get("#okta-signin-password").type("Qtfqtf123!");
      cy.get("#okta-signin-submit").click();
    });
    //Implemented wait to fetch the portal companies (Might take up to 5 seconds)
    cy.wait(5000);
    //Selecting a Parent company
    cy.get("div")
      .parent(".select-company__companyWrapper")
      .find("div")
      .eq(0)
      .click();
    //Checking if A is displayed
    cy.contains(".header__company", "A");
    cy.contains(".header__company", "Channel Partner").should("not.exist");
    //Switching to the company selection window
    cy.contains(".navigation__navItemText", "Company selection").click();
    //Switching to company B
    cy.contains(".select-company__company", "Company B").click();
    cy.contains(".header__company", "Channel Partner: A");
    cy.contains(".header__company", "Company B");
    //Switching to the company selection window
    cy.contains(".navigation__navItemText", "Company selection").click();
    cy.contains(".select-company__company", "Company D").click();
    cy.contains(".header__company", "Channel Partner: Company B");
    cy.contains(".header__company", "Company D");
  });
});
