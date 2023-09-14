import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, link } = this.props;
    return (
      <div className="card h-70" style={{ width: "25rem" }}>
        <img
          src={imageurl?imageurl:"https://www.gmt-sales.com/wp-content/uploads/2015/10/no-image-found.jpg"}
          style={{
            height: 150,
            borderRadius: 7,
            alignSelf: "center",
          }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank">
          <button type="button" class="btn btn-dark">Read More</button>
          </a>
        </div>
      </div>
    );
  }
}
export default NewsItem;
