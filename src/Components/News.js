import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    await fetch(
      // "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4fb7b2a328c3411dbfe120110d6a071e"
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4fb7b2a328c3411dbfe120110d6a071e"
    )
      .then((response) => {
        if (response.status == 200) {
          response
            .json()
            .then((result) => this.setState({ articles: result.articles }));
        }
      })
      .catch((e) => console.log(e));
  }
  async componentDidUpdate() {
    if (this.props.category == "Apple") {
      await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2023-09-12&to=2023-09-12&sortBy=popularity&apiKey=4fb7b2a328c3411dbfe120110d6a071e"
      )
        .then((response) => {
          if (response.status == 200) {
            response
              .json()
              .then((result) => this.setState({ articles: result.articles }));
          }
        })
        .catch((e) => console.log(e));
    } else if (this.props.category == "Tesla") {
      await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-08-13&sortBy=publishedAt&apiKey=4fb7b2a328c3411dbfe120110d6a071e"
      )
        .then((response) => {
          if (response.status == 200) {
            response
              .json()
              .then((result) => this.setState({ articles: result.articles }));
          }
        })
        .catch((e) => console.log(e));
    } else if (this.props.category == "business") {
      await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4fb7b2a328c3411dbfe120110d6a071e"
      )
        .then((response) => {
          if (response.status == 200) {
            response
              .json()
              .then((result) => this.setState({ articles: result.articles }));
          }
        })
        .catch((e) => console.log(e));
    } else if (this.props.category == "Tech") {
      await fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4fb7b2a328c3411dbfe120110d6a071e"
      )
        .then((response) => {
          if (response.status == 200) {
            response
              .json()
              .then((result) => this.setState({ articles: result.articles }));
          }
        })
        .catch((e) => console.log(e));
    } else if (this.props.category == "bit") {
      await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4fb7b2a328c3411dbfe120110d6a071e"
      )
        .then((response) => {
          if (response.status == 200) {
            response
              .json()
              .then((result) => this.setState({ articles: result.articles }));
          }
        })
        .catch((e) => console.log(e));
    } else if (this.props.category == "head") {
      await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=4fb7b2a328c3411dbfe120110d6a071e"
      )
        .then((response) => {
          if (response.status == 200) {
            response
              .json()
              .then((result) => this.setState({ articles: result.articles }));
          }
        })
        .catch((e) => console.log(e));
    }
  }

  render() {
    let { category } = this.props;
    return (
      <div className="container">
        <div className="row">
          {this.state.articles.map((i) => {
            return (
              <div className="class col-md-4 my-3">
                <NewsItem
                  title={i.title}
                  description={i.description ? i.description.slice(0, 150) : ""}
                  imageurl={i.urlToImage}
                  link={i.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default News;
