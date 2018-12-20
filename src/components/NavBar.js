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
          <Text style={styles.text} >Menu</Text>
        </TouchableOpacity>

        <TextInput placeholder="Search..." style={styles.TextInput} />

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text} >Log in</Text>
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
    backgroundColor: "#213B51",
    borderBottomWidth: 2,
    borderColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: "5%",
    paddingLeft: "5%"
  },
  TextInput: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
    backgroundColor: "#ffffff",
    width: "55%",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  buttonStyle: {
    justifyContent: "center",
    width: 50,
    height: 35,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#969E9D",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  text: {
    color: 'white'
  }
});
