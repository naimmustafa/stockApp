import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.buttonStyle}>
          <Button title="Menu" style={styles.buttonStyle} />
        </View>
        <TextInput placeholder="Search" style={styles.TextInput} />
        <View style={styles.buttonStyle}>
          <Button title="Log In" style={styles.buttonStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderWidth: 2,
    top: "5%",
    backgroundColor: "#41f471"
  },
  TextInput: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    borderWidth: 1,
    width: "50%",
    backgroundColor: '#ffffff'
  },
  buttonStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
});
