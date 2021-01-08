import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Device(props) {
  const [isOn, setIsOn] = useState(false);

  const onButtonClicked = () => {
    if (!isOn) {
      props.updateCounter("increment");
      setIsOn(!isOn);
    }
  };

  const offButtonClicked = () => {
    if (isOn) {
      props.updateCounter("decrement");
      setIsOn(!isOn);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <View style={isOn ? styles.greenIndicator : styles.redIndicator} />
      </View>
      <Text style={styles.deviceText}>{props.deviceName}</Text>
      <View style={styles.buttonContainer}>
        <Button title="On" onPress={() => onButtonClicked()} />
        <Button title="Off" onPress={() => offButtonClicked()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "beige",
    alignItems: "center",
    height: 100,
    marginTop: 20,
  },
  indicatorContainer: {
    flex: 1,
    marginLeft: 10,
  },
  greenIndicator: {
    width: 20,
    height: 20,
    backgroundColor: "#42f548",
  },
  redIndicator: {
    width: 20,
    height: 20,
    backgroundColor: "red",
  },
  deviceText: {
    flex: 6,
    fontSize: 18,
    marginLeft: 15,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginRight: 10,
  },
});
