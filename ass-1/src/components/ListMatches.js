import React from "react";
import { Link } from "react-router-dom";
import MatchedMovie from "./MatchedMovie";

class ListMatches extends React.Component {
  /*checkSearchType() {
    if (this.props.searchedAll == "All") {
    } else {
    }
  }*/
  render() {
    let loadingImgURL =
      "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
    return (
      <div className="matchedList">
        <ul>
          {this.props.movies.map((m, key) => (
            <MatchedMovie
              movies={this.props.movies}
              searchedAll={this.searchedAll}
              key={m.id}
              title={m.title}
              ratings={m.ratings.average}
              year={m.release_date}
              poster={m.poster}
              eachMovie={m}
              handleAddFav={this.props.handleAddFav}
              handleDeleteFav={this.props.handleDeleteFav}
              favourites={this.props.favourites}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default ListMatches;
