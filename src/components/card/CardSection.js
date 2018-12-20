import React from "react";
import { View, StyleSheet } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#f2f9f3',
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export default CardSection;
