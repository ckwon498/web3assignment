import React from "react";
import { Link } from "react-router-dom";
import DefaultView from "./DefaultView.js";
import "./css/HomeView.css";
import SearchFilter from "./SearchFilter";

class HomeView extends React.Component {
  
  handleShowAll = () => {
    this.props.clickedSearchAll();
  };

  handleTitleSearch = () => {
  let FoundTitles = this.props.clickedSearchTitle();
  };

  render() {
    let bckURL =
      "https://i0.wp.com/twinfinite.net/wp-content/uploads/2018/12/Granblue-1.jpg?w=1920&ssl=1";
    // let posterIMG = `https://image.tmdb.org/t/p/w185${this.props.movies.poster}`;

    return (
      <div
        className="banner"
        style={{
          backgroundImage: `url(${bckURL})`,
          height: "1000px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          //backgroundRepeat: "no-repeat"
        }}
      >
        <div className="home-box">
          <h1>Movie Browser</h1>
          <form className="title-search">
            Title{" "}
            <input
              type="text"
              id="searchInput"
              name="title"
              onChange={this.props.searchTitle}
              placeholder="Enter Title"
            />
            <div>
              <Link to="/DefaultView">
                <button onClick={this.handleTitleSearch}>
                  Search Movies by Title
                </button>
              </Link>
              <Link to="/DefaultView">
                <button onClick={this.handleShowAll}>Show All Movies</button>
              </Link>
            </div>
          </form>

          <div className="homeFooter">
            {/* <DefaultView title={this.props.title} />; */}
          </div>
        </div>
      </div>
    );
  }
}
export default HomeView;
