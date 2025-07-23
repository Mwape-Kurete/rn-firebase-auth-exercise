// TODO: Create Firebase Auth Functions
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const loginUser = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log("User Logged In:", user.email);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Message:", errorMessage);
    });
};

//TODO: Registration Functionality Homework
// 1. first create user in AUTH
// 2. then create user in Firestore

export const logoutUser = () => {
  signOut(auth).then(() => {
    console.log("user has logged out...");
  });
};

export const getUserInfo = () => {
  const user = auth.currentUser;

  if (user) {
    //for logic handling and to not get null errors
    return user;
  } else {
    return null;
  }
};
