import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { searchText } from "../redux/actions/index";

class NavBar extends Component {
  onTextChange(text) {
    this.props.searchText(text);
  }

  render() {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text}>Menu</Text>
        </TouchableOpacity>

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
          <Text style={styles.text}>Log in</Text>
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
    margin: 10,
    backgroundColor: "#ffffff",
    width: "55%",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3
  },
  buttonStyle: {
    justifyContent: "center",
    width: 50,
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
    color: "white"
  }
});

const mapStateToProps = state => {
  return {
    search: state.search.search
  };
};

const mapDispatchToProps = dispatch => ({
  searchText: text => dispatch(searchText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
