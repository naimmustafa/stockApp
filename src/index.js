import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import NavBar from "./components/NavBar";
import Feed from "./components/feed/Feed";
import { connect } from "react-redux";
import { countdown } from "./redux/actions/index";

class Main extends Component {
  componentWillMount() {
    this.props.countdownAction();
  }

  calculateLatsFetch() {
    const { countdownNumber } = this.props;
    if (
      countdownNumber === 0 ||
      countdownNumber === 1 ||
      countdownNumber === 2
    ) {
      return "Just Now!";
    }
    return countdownNumber + " seconds ago";
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <NavBar />
          <Feed />
          <Text>Last update: {this.calculateLatsFetch()}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd"
  },
  innerContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF"
  }
});

const mapStateToProps = state => {
  return {
    countdownNumber: state.feed.countdownNumber
  };
};

const mapDispatchToProps = dispatch => ({
  countdownAction: () => dispatch(countdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
