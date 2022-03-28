import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;

    return (
      <div>
        <div className="card mx-2 my-2" style={{ width: "18rem" }}>
          <img
            src={
              !imgUrl
                ? "https://bitsofco.de/content/images/2018/12/broken-1.png"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
