import React from "react";
import { Text } from "react-native";
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
        <Text>Hello</Text>
      </CardSection>
    </Card>
  );
};

export default Example;
