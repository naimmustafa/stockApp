import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import Card from "./Card";

import CardSection from "./CardSection";

class Example extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>text</Text>
        </CardSection>
      </Card>
    );
  }
}

export default Example;
