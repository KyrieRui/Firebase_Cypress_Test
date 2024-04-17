describe("SignIn Component", () => {
  it("should input email and password", () => {
    cy.visit("http://localhost:3000/"); // local host page

    // check if the input fields are visible
    cy.get('input[type="email"]').eq(0).should("be.visible");
    cy.get('input[type="password"]').eq(0).should("be.visible");

    // check if the input fields are empty
    cy.get('input[type="email"]').eq(0).should("have.value", "");
    cy.get('input[type="password"]').eq(0).should("have.value", "");

    // check if the Log In button is visible
    cy.get('button[type="submit"]').eq(0).should("be.visible");

    // input email and password
    cy.get('input[type="email"]').eq(0).type("111@gmail.com");
    cy.get('input[type="password"]').eq(0).type("password");
  });
});
