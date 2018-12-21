import React, { Component } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import Example from "../card/Example";
import { connect } from "react-redux";
import { getCryptos } from "../../redux/actions/index";

class Feed extends Component {
  componentWillMount() {
    this.props.getCryptos();
  }

  renderCryptoList() {
    return this.props.cryptos.map(crypto => <Text>{crypto.companyName}</Text>)
  }

  render() {
    console.log(this.props);
    return (
      <ScrollView style={styles.feedContainer}>
        {this.renderCryptoList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    flexDirection: "column"
  }
});

const mapStateToProps = state => {
  return {
    cryptos: state.feed.cryptos
  };
};

const mapDispatchToProps = dispatch => ({
  getCryptos: text => dispatch(getCryptos(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
