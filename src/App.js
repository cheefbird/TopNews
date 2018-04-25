import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Body, Title, Content } from "native-base";

import ArticleList from "./screens/ArticleList";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header iosBarStyle="light-content" style={styles.header}>
          <Body>
            <Title style={{ color: "#fff" }}>Top News</Title>
          </Body>
        </Header>
        <Content>
          <ArticleList />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  header: {
    backgroundColor: "#000",
    borderBottomColor: "#cbcbcb"
  }
});
