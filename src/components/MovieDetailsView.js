import React from "react";
import Favourites from "./Favourites.js";
import Header from "./Header.js";
import { Link } from "react-router-dom";
class MovieDetailsView extends React.Component {
  handleShowAll = () => {
    this.props.viewHome();
  };
  render() {
    return (
      <div>
        <div className="header">
          <Header show={this.props.isOpen} onClose={this.props.onClose}/>
          <Favourites
            handleDeleteFav={this.props.handleDeleteFav}
            favourites={this.props.favourites}
          />
          <div className ="castNameContainer"></div>
        </div>
      </div>
    );
  }
}
export default MovieDetailsView;
