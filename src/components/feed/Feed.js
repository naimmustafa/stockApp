import React, { Component } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import Example from "../card/Example";

export default class Feed extends Component {
  render() {
    return (
      <ScrollView style={styles.feedContainer}>
        <Example />
        <Example />
        <Example />
        <Example />
        <Example />
        <Example />
        <Example />
        <Example />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    flexDirection: "column",
  }
});
