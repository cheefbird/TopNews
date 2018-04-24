import React, { Component } from "react";
import { List, ListItem } from "native-base";

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

  renderArticle(article) {
    return (
      <ListItem button>
        <ArticleCard article={article} />
      </ListItem>
    );
  }

  render() {
    console.log(this.state);
    return (
      <List dataArray={this.state.articles} renderRow={this.renderArticle} />
    );
  }
}

export default ArticleList;
