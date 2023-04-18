describe("E2E - assertions", () => {
  it("expect and should assertions", () => {
    cy.visit("/");

    //Text verification expect/should
    cy.get(`a[title="Contact us"]`).should("contain", "Contact us");
    cy.get(`a[title="Contact us"]`).then((a) => {
      expect(a).to.contain("t us");
    });

    //Text verification not contain
    cy.get(`a[title="Contact us"]`).should("not.contain", "Sign in");
    cy.get(`a[title="Contact us"]`).then((b) => {
      expect(b).not.to.contain("Sign in");
    });

    //Class cerification
    cy.get("#search_query_top").should(
      "have.class",
      "search_query form-control ac_input"
    );
    cy.get("#search_query_top").then((searchBar) => {
      expect(searchBar).to.have.class("search_query form-control ac_input");
    });
    //If the element is visible
    cy.get("#search_query_top").should("be.visible");
    cy.get("#search_query_top").then((searchBar) => {
      expect(searchBar).to.be.visible;
    });
  });
});
