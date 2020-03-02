import React from "react";
import { Link } from "react-router-dom";

class FavouritesToken extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () => {
    this.props.handleDeleteFav(this.props.movie);
  };

  render() {
    return (
      <div className="FavouritesTokenDiv">
        <Link to= "/MovieDetailsView">
        <div className="favPhoto">
         <img
            src={"https://image.tmdb.org/t/p/w185" + this.props.movie.poster}
          />
        </div>
        </Link>
        <div className="deleteFavButton">
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
export default FavouritesToken;
