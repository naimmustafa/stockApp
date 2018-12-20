import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text>Menu</Text>
        </TouchableOpacity>

        <TextInput placeholder="Search..." style={styles.TextInput} />

        <TouchableOpacity style={styles.buttonStyle}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#8fad93",
    borderBottomWidth: 2,
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: "5%",
    paddingLeft: "5%"
  },
  TextInput: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    backgroundColor: "#ffffff",
    width: "60%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },

  buttonStyle: {
    justifyContent: "center",
    width: 50,
    height: 50,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  }
});
