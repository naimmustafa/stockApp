import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CardSection from './CardSection';

export default class Card extends Component {
  render() {
    return (
        <View style={styles.feedContainer}>
          <CardSection />
          <CardSection />
          <CardSection />
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
