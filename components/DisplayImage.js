import React from "react";
import { StyleSheet, Image } from "react-native";

const DisplayImage = (props) => {
  if (props.taskStatus.length < 1) {
    return (
      <Image style={styles.image} source={require("../assets/splash.png")} />
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    margin: 80,
    marginTop: 250,
  },
});

export default DisplayImage;
