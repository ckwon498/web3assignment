import React from "react";
import { Link } from "react-router-dom";
import Favourites from "./Favourites";

class MatchedMovie extends React.Component {
  sortBy = () => {};

  handleHeart = () => {
    this.props.handleAddFav(this.props.eachMovie);
  };

  handleCursorHover = (e) => {
    e.target.style.background = 'red';
  };
  render() {
    return (
      <div className="eachMovie">
        <Link to="/MovieDetailsView">
        <figure id="matchedMoviePosterFig">
          <img id="matchedMoviePoster" src={"https://image.tmdb.org/t/p/w342" + this.props.poster} />
        </figure>
        </Link>
        <div>
          <h3 id="matchedMovieTitle">{this.props.title}</h3>
          <h4>{this.props.year}</h4>
          <p>{this.props.ratings.average}</p>
          <div>
            <button className="heartButton" onClick={this.handleHeart}>
              ♥
            </button>
            <Link to="/Castview">
            <button className="viewButton">View</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default MatchedMovie;
