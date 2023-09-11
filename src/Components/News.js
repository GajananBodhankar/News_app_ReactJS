import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
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

  render() {
    return (
      <div className="container">
        This is news component
        <div className="row">
          {this.state.articles.map((i) => {
            if (i.author != null) {
              return (
                <div className="class col-md-4 my-3">
                  <NewsItem
                    title={i.title}
                    description={i.description}
                    imageurl={i.urlToImage}
                    link={i.url}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
export default News;
