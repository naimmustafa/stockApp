import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  View
} from "react-native";
import Example from "../card/Example";
import { connect } from "react-redux";
import { getCryptos, refreshCryptos } from "../../redux/actions/index";

class Feed extends Component {
  componentWillMount() {
    this.props.getCryptos();
    this.props.refreshCryptos();
  }

  renderCryptoList() {
    return this.props.cryptos.map(crypto => (
      <Example key={crypto.symbol} crypto={crypto} />
    ));
  }

  renderSpinner() {
    const { loading, text } = this.props;
    if (loading) {
      return (
        <View style={styles.spinerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>{text}</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.feedContainer}>
        <Text style={styles.textStyle}>Crypto Currencies</Text>
        {this.renderCryptoList()}
      </ScrollView>
    );
  }

  render() {
    return this.renderSpinner();
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    flexDirection: "column"
  },
  spinerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    alignSelf: "center",
    color: "black",
    fontSize: 15,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  return {
    cryptos: state.feed.cryptos,
    text: state.feed.text,
    loading: state.feed.loading
  };
};

const mapDispatchToProps = dispatch => ({
  getCryptos: text => dispatch(getCryptos(text)),
  refreshCryptos: () => dispatch(refreshCryptos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
