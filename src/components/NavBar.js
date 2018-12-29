import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Picker
} from "react-native";

import { connect } from "react-redux";
import {
  searchText,
  getMoney,
  saveAsyncStorage
} from "../redux/actions/index";

class NavBar extends Component {
  onTextChange(text) {
    this.props.searchText(text);
  }

  saveAsyncStorageFunc() {
    const { assets, saveAsyncStorage, money } = this.props;
    saveAsyncStorage(assets, money);
  }

  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.buttonStyle}>
          <Picker
            selectedValue={this.props.value}
            mode={"dropdown"}
            style={{ width: 150, color: "white", marginLeft: 50 }}
            onValueChange={itemValue => this.props.getMoney(itemValue)}
          >
            <Picker.Item label="Add Money" value={this.props.value} />
            <Picker.Item label="10$" value={10} />
            <Picker.Item label="50$" value={50} />
            <Picker.Item label="100$" value={100} />
            <Picker.Item label="500$" value={500} />
            <Picker.Item label="1,000$" value={1000} />
            <Picker.Item label="5,000$" value={5000} />
          </Picker>
        </View>
        <TextInput
          placeholder="Search..."
          style={styles.TextInput}
          onChangeText={this.onTextChange.bind(this)}
          value={this.props.search}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.props.openModal()}
        >
            <Text style={styles.text}>Portfolio</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#213B51",
    borderBottomWidth: 2,
    borderColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: "5%",
    paddingLeft: "5%"
  },
  TextInput: {
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#ffffff",
    width: "40%",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3
  },
  buttonStyle: {
    justifyContent: "center",
    width: "25%",
    height: 35,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#969E9D",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3
  },
  text: {
    color: "white",
    fontSize: 15
  }
});

const mapStateToProps = state => {
  return {
    search: state.search.search,
    value: state.assets.value,
    assets: state.assets.assets,
    money: state.assets.money
  };
};

const mapDispatchToProps = dispatch => ({
  searchText: text => dispatch(searchText(text)),
  getMoney: amount => dispatch(getMoney(amount)),
  saveAsyncStorage: (assets, money) => dispatch(saveAsyncStorage(assets, money))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
