import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Rooms from "./components/Rooms";
import Devices from "./components/Devices";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Rooms />
      <Devices />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "10%",
  },
});
