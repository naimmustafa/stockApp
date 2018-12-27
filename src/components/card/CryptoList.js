import React, { Component } from "react";
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import Card from "./Card";
import { connect } from "react-redux";
import { buyAssets } from "../../redux/actions/index";

import CardSection from "./CardSection";

class CryptoList extends Component {
  getPercentageStyling() {
    const { crypto } = this.props;
    if (crypto.changePercent.toString().startsWith("-")) {
      return styles.decreaseText;
    }
    return styles.increaseText;
  }

  handleBuying() {
    const { buyAssets, assets, crypto } = this.props;
    const amount = 120
    if (assets.money < amount) {
      return Alert.alert(
        "You dont have enough money",
        "Please add more money to buy crypto"
      );
    }
    return buyAssets(amount, crypto.latestPrice, crypto.symbol, assets.assets);
  }

  render() {
    const { crypto, buyAssets } = this.props;
    console.log(this.props.buyAssets);
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
          <TouchableOpacity
            style={styles.buttonStyleBuy}
            onPress={() => this.handleBuying()}
          >
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
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "green",
    marginLeft: 10,
    marginRight: 10
  },
  buttonStyleSell: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "red",
    marginLeft: 10,
    marginRight: 10
  },
  buttonText: {
    color: "white"
  }
});

const mapStateToProps = state => {
  return {
    cryptos: state.feed.cryptos,
    assets: state.assets
  };
};

const mapDispatchToProps = dispatch => ({
  buyAssets: (amount, currency, symbol) =>
    dispatch(buyAssets(amount, currency, symbol))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoList);
