import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";
import NavBar from './components/NavBar';

export default class Main extends Component {
  render() {
    return (
      <View>
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'column'
  }
});
