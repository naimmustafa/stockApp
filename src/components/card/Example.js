import React from "react";
import { Text, ActivityIndicator } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const Example = () => {
  return (
    <Card>
      <CardSection>
        <Text>Hello</Text>
      </CardSection>

      <CardSection>
        <Text>World!</Text>
      </CardSection>

      <CardSection>
        <ActivityIndicator size="small" color="#0000ff" />
      </CardSection>
    </Card>
  );
};

export default Example;
