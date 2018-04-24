import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import ArticleList from "./screens/ArticleList";

export default class App extends Component {
  render() {
    return (
      <View>
        <ArticleList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
