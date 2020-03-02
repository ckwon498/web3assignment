import React from "react";
import Favourites from "./Favourites.js";
import { Link } from "react-router-dom";
class MovieDetailsView extends React.Component {
  handleShowAll = () => {
    this.props.viewHome();
  };
  render() {
    return (
      <div>
        <div className="header">
          <Header />
          <Favourites />
        </div>
      </div>
    );
  }
}
export default MovieDetailsView;
