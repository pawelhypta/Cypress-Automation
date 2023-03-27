describe("Inputs", () => {
  it("filling out/clearing inputs", () => {
    cy.visit("/");
    cy.get("#search_query_top").type("Blouse", { delay: 500 });
    cy.get("#search_query_top").clear();
  });
});
