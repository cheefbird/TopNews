import React, { Component } from "react";
import { ScrollView, View } from "react-native";

import ArticleCard from "../components/ArticleCard";

import axios from "axios";

class ArticleList extends Component {
  state = {
    articles: []
  };

  componentWillMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=01c6d185b0bb4b58942fd26b113f17e5"
      )
      .then(response => {
        const { data } = response;

        return data["articles"];
      })
      .then(articles => this.setState({ articles }));
  }

  renderArticles() {
    return this.state.articles.map(article => (
      <ArticleCard key={article.title} article={article} />
    ));
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderArticles()}</ScrollView>;
  }
}

export default ArticleList;
