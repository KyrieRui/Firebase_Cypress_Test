import { getAuth, deleteUser } from "firebase/auth";

// get the auth object by email
const auth = getAuth();
const user = auth.currentUser;

deleteUser(user)
  .then(() => {
    // User deleted.
    console.log("User: " + email + " deleted Successful.");
  })
  .catch((error) => {
    console.log(error);
  });

export { deleteUser };
