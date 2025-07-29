// Create Register Screen & Register Functionality
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { loginUser } from "../services/authService";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Registration Function
  const register = () => {
    // first calling the check for password match
    handleFormSubmit();

    // next step is to call the registration function from our auth service
  };

  const handleFormSubmit = () => {
    if (password !== confirmPassword) {
      // Display an error message to the user
      alert("Passwords do not match!");
      return;
    }
    // If passwords match, proceed with form submission or other logic
    console.log("Passwords match. Proceeding...");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Create a Username"
          onChangeText={(newText) => setUsername(newText)}
          defaultValue={username}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm password"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        {/* TODO: Add Register Navigation */}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "black",
    textAlign: "center",
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
