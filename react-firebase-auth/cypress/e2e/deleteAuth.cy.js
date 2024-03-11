import { getAuth, deleteUser, getUserByEmail } from "../../src/firebase";

describe("SignIn Component", () => {
  it("should input email and password", () => {
    cy.visit("http://localhost:3000/");

    // create a random email address
    const randomNumber = Math.floor(Math.random() * 100);
    const email = `test${randomNumber}@qq.com`;

    // type in the email and password in Log in
    cy.get('input[type="email"]').eq(1).type(email);
    cy.get('input[type="password"]').eq(1).type("123456");

    // click the Log In button
    cy.contains("Sign Up").click();

    // wait the signed content to be visible
    cy.contains(`Signed In as ${email}`).should("be.visible");

    // delete the user
    cy.then(() => {
      // get the auth object by email
      return getUserByEmail(email).then((user) => {
        // delete the user if it exists
        if (user) {
          return deleteUser(user.uid)
            .then(() => {
              console.log("Successfully deleted user");
            })
            .catch((error) => {
              console.log("Error deleting user:", error);
            });
        } else {
          console.log("User not found");
        }
      });
    });
  });
});
