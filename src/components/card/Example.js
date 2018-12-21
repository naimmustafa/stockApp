import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import Card from "./Card";

import CardSection from "./CardSection";

class Example extends Component {
  render() {
    console.log(this.props);
    const { searchText } = this.props;
    return (
      <Card>
        <CardSection>
          <Text>{searchText}</Text>
        </CardSection>

        <CardSection>
          <Text>World!</Text>
        </CardSection>

        <CardSection>
          <ActivityIndicator size="small" color="#0000ff" />
        </CardSection>
      </Card>
    );
  }
}

export default Example;
