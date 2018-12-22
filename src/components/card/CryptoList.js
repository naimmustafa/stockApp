import React, { Component } from "react";
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Card from "./Card";

import CardSection from "./CardSection";

class CryptoList extends Component {
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
            <Text style={styles.money}>
              {crypto.latestPrice === null ? "0" : crypto.latestPrice}
            </Text>
            $
          </Text>
        </CardSection>

        <CardSection>
          <TouchableOpacity style={styles.buttonStyleBuy}>
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyleSell}>
            <Text style={styles.buttonText}>Sell</Text>
          </TouchableOpacity>
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
    fontWeight: "bold",
    color: "green"
  },
  buttonStyleBuy: {
    width: "30%",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'green',
    marginLeft: 10,
    marginRight: 10
  },
  buttonStyleSell: {
    width: "30%",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 10
  },
  buttonText: {
    alignSelf: "center",
    color: 'white'
  }
});

export default CryptoList;
