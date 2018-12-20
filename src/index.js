import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button, Text } from "react-native";
import NavBar from "./components/NavBar";
import Feed from './components/feed/Feed';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
