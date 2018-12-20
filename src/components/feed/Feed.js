import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Example from "../card/Example";

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.feedContainer}>
        <Example />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  }
});
