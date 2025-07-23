import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { getUserInfo, logoutUser } from "../services/authService";

const ProfileScreen = () => {
  // handle logout
  const handleLogout = () => {
    logoutUser();
  };

  const [user, setUser] = useState(null);
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text>Profile</Text>

        {/* Show logged in user info */}
        <Text>{getUserInfo()?.email}</Text>
        <Text>{getUserInfo()?.uid}</Text>

        <Button title="Sign Out" color="green" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
