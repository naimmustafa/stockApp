import React, { Component } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import Example from "../card/Example";
import { connect } from "react-redux";

class Feed extends Component {
  render() {
    const { search } = this.props;
    return (
      <ScrollView style={styles.feedContainer}>
        <Example searchText={search} />
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
    search: state.search.search
  };
};

export default connect(
  mapStateToProps,
  {}
)(Feed);
