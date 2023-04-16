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
  });
});
