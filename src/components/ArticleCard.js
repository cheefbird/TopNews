import React, { Component } from "react";
import { View, Text } from "react-native";

const ArticleCard = ({ article }) => {
  const { title, description } = article;

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = {
  container: {
    padding: 8,
    flex: 1
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold"
  },
  description: {
    fontSize: 12
  }
};

export default ArticleCard;
