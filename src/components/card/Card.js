import React from "react";
import { StyleSheet, View } from "react-native";

const Card = props => {
  return <View style={styles.cardStyle}>{props.children}</View>
};

const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset:  {width: 1,height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    alignSelf: 'center',
    width: '95%',
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20
  }
});

export default Card;
