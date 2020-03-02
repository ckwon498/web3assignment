import React from "react";
import Header from "./Header.js";
import Favourites from "./Favourites.js";
import { Link } from "react-router-dom";
import MovieFilters from "./MovieFilters";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListMatches from "./ListMatches";
import CastView from "./CastView.js";


class DefaultView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="top-header">
          <Header show={this.props.isOpen} onClose={this.props.onClose} />
          
        </div>
        <div className="favorite-header">
          <Favourites
            handleDeleteFav={this.props.handleDeleteFav}
            favourites={this.props.favourites}
          />
          </div>
        <TransitionGroup className="movieFilters">
          <CSSTransition timeout={300} classNames="fade">
            <MovieFilters />
          </CSSTransition>
        </TransitionGroup>
        <div>
          
        <ListMatches
          movies={this.props.movies}
          searchedAll={this.props.searchedAll}
          sortASC={this.props.sortASC}
          handleAddFav={this.props.handleAddFav}
          favourites={this.props.favourites}
        />
        </div>
      </div>
    );
  }
}
export default DefaultView;
