import React from "react";
import { View, StyleSheet } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>
};

const styles = {
  containerStyle: {
    padding: 5,
    borderBottomWidth: 1,
    backgroundColor: '#EDFFED',
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row",
    borderColor: "black",
    position: "relative"
  }
};

export default CardSection;
