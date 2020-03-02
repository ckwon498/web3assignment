import React from "react";
import { Link } from "react-router-dom";
import DefaultView from "./DefaultView.js";
import "./css/HomeView.css";
import SearchFilter from "./SearchFilter";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titleInp: "" };
  }
  handleShowAll = () => {
    //    this.props.SortAlpha();
    this.props.clickedSearchAll();
    console.log(this.props.movies);
  };
  handleTitleSearch = e => {
    e.preventDefault();
    var title = this.state.title;
    alert('You enetered "' + this.state.titleInp + '" but our title filter is undergoing maintenance please try again later');
    
  };
  handleTitleInput = val => {
    this.setState({
      titleInp: val.target.value
    });
   
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
              onChange={val => this.handleTitleInput(val)}
            />
            <div>
              <Link to="/DefaultView">
                <button onClick={this.handleTitleSearch} titleInp={this.state.titleInp}>
                  Search Matching Movies
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
