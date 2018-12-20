import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import NavBar from "./components/NavBar";
import Feed from './components/feed/Feed';

export default class Main extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <NavBar />
        <Feed />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  }
});
