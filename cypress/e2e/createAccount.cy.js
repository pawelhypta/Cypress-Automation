import { faker } from "@faker-js/faker";

const randomEmailSuffix = faker.random.numeric(5);
const randomFirstName = faker.name.firstName("male");
const randomLastName = faker.name.lastName();
const randomDay = faker.datatype.number({ min: 1, max: 30 });
const randomMonth = faker.date.month();
const randomYear = faker.datatype.number({ min: 1920, max: 2005 });

describe("E2E - Creating user", () => {
  it("Filling out registration from and creating a user", () => {
    cy.visit("/");
    cy.contains(".login", "Sign in").click();
    cy.url().should(
      "include",
      "/index.php?controller=authentication&back=my-account"
    );
    cy.get("#email_create").type(`pawel.qtf+${randomEmailSuffix}@gmail.com`);
    cy.get("#SubmitCreate").click();
    //Filling out the registration form
    cy.get("#uniform-id_gender1").click();
    cy.get("#customer_firstname").type(randomFirstName);
    cy.get("#customer_lastname").type(randomLastName);
    cy.get("#passwd").type("AutomationTests123!");
    cy.get("#days").select(`${randomDay}`);
    cy.get("#months").select(randomMonth);
    cy.get("#years").select(`${randomYear}`);
    //Clicking submit button
    cy.get("#submitAccount").click();
    //Assertion to find success alert
    cy.get(".alert-success").should(
      "contain",
      "Your account has been created."
    );
  });
});
