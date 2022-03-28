import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
        articles: [],
        loading: false,
    }
    console.log("hello i am constructor");
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=13b4ec9be5404936a191049197c3210a";
    let data = await fetch(url);
    let passedData = await data.json();
    console.log(passedData);
    this.setState({ articles: passedData.articles });
  }
  render() {
    return (
      <div>
        <div className="container my-5">
          <h2>News Sparrow - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((elements) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-12" key={elements.url}>
                  <Newsitem
                    
                    title={elements.title.slice(0,45)}
                    description={elements.description? elements.description.slice(0,88) : ""}
                    imgUrl={elements.urlToImage}
                    newsUrl={elements.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
