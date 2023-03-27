describe("Checkbox actions", () => {
  it("Check if checkbox is checked", () => {
    cy.visit("/");
    cy.contains(".sf-with-ul", "Women").click();
    cy.get("#ul_layered_category_0")
      .find("input")
      .then((checkbox) => {
        cy.get(checkbox)
          .eq(0)
          .check()
          .invoke("prop", "checked")
          .then((checkbox0value) => cy.log(checkbox0value));
        cy.get(checkbox)
          .eq(1)
          .invoke("prop", "checked")
          .then((checkbox1value) => cy.log(checkbox1value));
      });
    cy.get("#ul_layered_id_attribute_group_1").find("input");
  });
});
