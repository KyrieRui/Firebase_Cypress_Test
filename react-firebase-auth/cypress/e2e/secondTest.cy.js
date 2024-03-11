describe("SignIn Component", () => {
  it("should input email and password", () => {
    cy.visit("http://localhost:3000/"); // local host page

    // type in the email and password in Log in
    cy.get('input[type="email"]').eq(0).type("test01@qq.com");
    cy.get('input[type="password"]').eq(0).type("123456");

    // verify that the input fields have the correct values
    cy.get('input[type="email"]').eq(0).should("have.value", "test01@qq.com");
    cy.get('input[type="password"]').eq(0).should("have.value", "123456");

    // click the Log In button
    cy.get('button[type="submit"]').eq(0).click();

    // verify that the user is signed in
    cy.contains("Signed In as test01@qq.com").should("be.visible");

    // click the Sign Out button
    cy.contains("Sign Out").should("be.visible").click();

    // verify that the user is signed out
    cy.contains("Signed Out").should("be.visible");
  });
});
