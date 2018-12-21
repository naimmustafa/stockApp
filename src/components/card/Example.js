import React, { Component } from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import Card from "./Card";

import CardSection from "./CardSection";

class Example extends Component {
  getPercentageStyling() {
    const { crypto } = this.props;
    if (crypto.changePercent.toString().startsWith("-")) {
      return styles.decreaseText;
    }
    return styles.increaseText;
  }

  render() {
    const { crypto } = this.props;
    return (
      <Card>
        <CardSection>
          <Text>
            {crypto.symbol} / {crypto.companyName} /{" "}
            <Text style={this.getPercentageStyling()}>
              {crypto.changePercent.toFixed(5)}
            </Text>%
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            Current Price:{" "}
            <Text style={styles.money}>{crypto.latestPrice === null ? "0" : crypto.latestPrice}</Text>
            $
          </Text>
        </CardSection>

        <CardSection>
        <Text>Button Here</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  increaseText: {
    color: "green"
  },
  decreaseText: {
    color: "red"
  },
  money: {
    fontWeight: 'bold',
    color: 'green'
  }
});

export default Example;
