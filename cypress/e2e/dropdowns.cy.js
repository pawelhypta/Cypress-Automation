describe("Action to select option from the dropdown list", () => {
  it("Select option from dropdown list", () => {
    cy.visit("/");
    cy.contains(".sf-with-ul", "Women").click();

    //Select with a name
    cy.get("#selectProductSort").select("In stock");
    //Select with value
    cy.get("#selectProductSort").select("price:desc");
    //Select with index
    cy.get("#selectProductSort").select(4);
  });

  //Select one by one
  it.only("Selection one by one", () => {
    cy.visit("/");
    cy.contains(".sf-with-ul", "Women").click();
    cy.get("#selectProductSort").then((select) => {
      cy.wrap(select)
        .find("option")
        .each((opcja) => cy.wrap(select).select(opcja.text));
    });
  });
});
