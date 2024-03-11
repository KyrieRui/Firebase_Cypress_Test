import { deleteUser } from "../../src/firebase";

describe("SignIn Component", () => {
  it("should input email and password", () => {
    cy.visit("http://localhost:3000/");

    // random number
    const randomNumber = Math.floor(Math.random() * 100);

    // type in the email and password in Log in
    cy.get('input[type="email"]').eq(1).type(`test${randomNumber}@qq.com`);
    cy.get('input[type="password"]').eq(1).type("123456");

    // click the Log In button
    cy.contains("Sign Up").click();

    // wait for 200ms
    cy.wait(200);

    // verify that the user is signed in
    cy.contains(`Signed In as test${randomNumber}@qq.com`).should("be.visible");

    // click the Sign Out button
    cy.contains("Sign Out").should("be.visible").click();

    // verify that the user is signed out
    cy.contains("Signed Out").should("be.visible");
  });
});
