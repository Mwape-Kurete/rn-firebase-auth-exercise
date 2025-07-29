// Create Firebase Auth Functions
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

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

// Registration Functionality Homework
// 1. first create user in AUTH
// 2. then create user in Firestore

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User registered with: " + user.email);

    const userId = user.uid;

    await setDoc(doc(db, "users", userId), {
      username: username,
      email: email,
    });
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      console.log("That email address is already in use!");
    } else if (error.code === "auth/invalid-email") {
      console.log("That email address is invalid!");
    } else {
      console.error("Error: ", error);
    }
  }
};
