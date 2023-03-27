describe("Invoke", () => {
  it("Invoke", () => {
    cy.visit("/");

    cy.get('[title="Contact us"]')
      .invoke("text")
      .then((buttonText) => {
        cy.log(buttonText);
      });

    cy.get('[title="Contact us"]')
      .invoke("attr", "href")
      .then((cuLink) => {
        cy.log(cuLink);
      });

    //Reading the value
    cy.get("#search_query_top")
      .type("Blouse", { delay: 500 })
      .invoke("prop", "value")
      .then((inputValue) => {
        cy.log(inputValue);
      });
  });
});
