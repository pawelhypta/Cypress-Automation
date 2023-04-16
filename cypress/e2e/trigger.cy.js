describe("E2E - scroll/hover over", () => {
  it("Hover over and scroll to the element", () => {
    cy.visit("/");
    cy.get(`a[title="Dresses"]`).eq(1).trigger("focus");
    cy.get(`li.sfHover a[title="Summer Dresses"]`).click();
    cy.get(`a[title="Specials"]`).eq(0).scrollIntoView();
  });
});
