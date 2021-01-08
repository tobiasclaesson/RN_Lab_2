import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 70, height: 70 }}
        source={require("../assets/house.png")}
      />
      <Text style={styles.title}>SmartHome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    color: "#42b3f5",
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "bold",
  },
});
