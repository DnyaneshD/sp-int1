/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the app", () => {
    cy.get("main").should("contain", "Hello");
  });
});
