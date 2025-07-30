import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ProfileScreen from "./screens/ProfileScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import RegistrationScreen from "./screens/RegistrationScreen";

// Navigation Container

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("User is logged in with uid:", uid);

        setIsLoggedIn(true);
      } else {
        // User is signed out
        console.log("No user currently signed in");
        setIsLoggedIn(false);
      }
    });

    // TODO: research how to convert above code to use a useContext hook
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // if the user is logged in show the main app screens
        <Stack.Navigator>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      ) : (
        // if the user is not logged in show the auth screens
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//TODO: Access Control
// 1. setup navigation for when a user is logged out
// 2. setup navigation for when a user is logged in
// 3. listen to wether when a user is logged in or not
