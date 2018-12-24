import React, { Component } from "react";
import { View, Style, StyleSheet, Text } from "react-native";

class HomeUserPanel extends Component {
  render() {
    return (
      <View style={styles.userPanel}>
        <Text>Budget: 100$</Text>
        <View style={styles.assets}>
          <Text style={styles.assetsText}>BTC: 0.254</Text>
          <Text style={styles.assetsText}>ETH: 5.12</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userPanel: {
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15
  },
  assets: {
    flexDirection: "row"
  },
  assetsText: {
    paddingLeft: 5
  }
});

export default HomeUserPanel;
