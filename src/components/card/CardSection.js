import React from "react";
import { View, StyleSheet } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>
};

const styles = {
  containerStyle: {
    padding: 5,
    borderBottomWidth: 1,
    backgroundColor: '#F8F9F7',
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "black",
    position: "relative"
  }
};

export default CardSection;
