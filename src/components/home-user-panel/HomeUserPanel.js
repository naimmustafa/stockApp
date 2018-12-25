import React, { Component } from "react";
import { View, Style, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import CardSection from "../card/CardSection";

class HomeUserPanel extends Component {
  renderAssets() {
    const { assets } = this.props;
    return assets.assets.map(asset => (
      <Text key={asset.symbol}>
        <Text style={{ fontWeight: "bold", color: "black" }}>
          {asset.symbol}:
        </Text>{" "}
        {asset.value}{" "}
      </Text>
    ));
  }

  render() {
    const { assets } = this.props;
    console.log(this.renderAssets());
    return (
      <View style={styles.userPanel}>
        <Text>
          Budget: <Text>{assets.money}</Text>$
        </Text>
        <View style={{width: '70%', flexDirection: 'row'}}>
          <Text>Assets: </Text>
          <ScrollView horizontal style={styles.assets}>
            {this.renderAssets()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userPanel: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    height: '5%',
    backgroundColor: 'aqua'
  },
  assets: {
    flexDirection: "row"
  },
  assetsText: {
    paddingLeft: 5
  }
});

const mapStateToProps = state => {
  return {
    assets: state.assets
  };
};

// const mapDispatchToProps = dispatch => ({
//   getCryptos: text => dispatch(getCryptos(text)),
//   refreshCryptos: () => dispatch(refreshCryptos())
// });

export default connect(
  mapStateToProps,
  {}
)(HomeUserPanel);
