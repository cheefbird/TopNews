import React, { Component } from "react";
import { View, Text } from "react-native";

class ArticleCard extends Component {
  render() {
    return (
      <View>
        <Text>Headline Text</Text>
        <Text>Summary Text will go here and be longer.</Text>
      </View>
    );
  }
}

export default ArticleCard;
