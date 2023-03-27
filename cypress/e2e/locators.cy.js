describe("E2E - locators", () => {
  it("Locators", () => {
    cy.visit("/");
    cy.get("a");

    //Select with ID
    cy.get("#search_query_top");

    //Select with a class
    cy.get(".form-control");

    //Select with attributes
    cy.get(`[name="search_query"`);

    //Select with attributes and index
    cy.get(`input[placeholder="Search"]`);

    //Select with multiple attruibutes
    cy.get(
      `[src="http://automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]`
    );

    //Select with text
    cy.contains("Shop now !");

    cy.contains(`[title="Contact us"]`, "Contact us");
    cy.get("li").parent("#home-page-tabs").find("li").eq(1);
    cy.get("li").parent("#home-page-tabs").find("li").contains("Best Sellers");
  });
});
