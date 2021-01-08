import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Device from "./Device";

export default function Rooms() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rooms</Text>
      <View style={styles.horizontalContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: "75%", height: "75%" }}
            source={require("../assets/living-room.png")}
          />
          <Text style={styles.roomText}>Living Room</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: "75%", height: "75%" }}
            source={require("../assets/bed.png")}
          />
          <Text style={styles.roomText}>Bedroom</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: "75%", height: "75%" }}
            source={require("../assets/kitchen.png")}
          />
          <Text style={styles.roomText}>Kitchen</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#fff",
    width: "90%",
  },
  horizontalContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    backgroundColor: "#42b3f5",
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 110,
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  roomText: {
    color: "black",
    fontSize: 10,
    marginTop: 5,
  },
});
