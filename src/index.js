import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Modal,
  TouchableHighlight
} from "react-native";
import NavBar from "./components/NavBar";
import Feed from "./components/feed/Feed";
import LoginMod from "./components/modals/Login";
import HomeUserPanel from "./components/home-user-panel/HomeUserPanel";
import { connect } from "react-redux";
import { countdown, openModal, closeModal } from "./redux/actions/index";

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
    const { openModal, isModalOpen, closeModal, assets } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalOpen}
            onRequestClose={() => closeModal()}
          >
            <LoginMod closeModal={() => closeModal()} />
          </Modal>
          <NavBar openModal={() => openModal()} />
          <HomeUserPanel />
          <Feed />
          <View style={styles.update}>
            <Text>Last update: {this.calculateLatsFetch()}</Text>
          </View>
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
  },
  update: {
    borderTopWidth: 1
  }
});

const mapStateToProps = state => {
  return {
    countdownNumber: state.feed.countdownNumber,
    isModalOpen: state.search.isModalOpen
  };
};

const mapDispatchToProps = dispatch => ({
  countdownAction: () => dispatch(countdown()),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
