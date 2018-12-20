import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class CardSection extends Component {
  render() {
    return (
          <View style={styles.cardStyle}>
            <Text>yey</Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 10,
    width: "95%",
    height: 100,
    borderWidth: 1,
    alignItems: "center"
  }
});
