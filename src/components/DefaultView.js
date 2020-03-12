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
    super(props);
    this.state = {
      inputTitle: "",
      yearBefore: "",
      yearAfter:"",
      yearBtwn1:"",
      yearBtwn2:"",
      rateBelow:"",
      rateAbove:"",
      rateBtwn1:"",
      rateBtwn2:"",
      radioYear:false,
      radioRate:false,
      customList: []
    };

  }

  updateState = (title, yBef, yAft, yBtw1, yBtw2, rBel, rAbo, rBtw1, rBtw2, radY, radR) => {
    this.setState({
      inputTitle: title,
      yearBefore: yBef,
      yearAfter: yAft,
      yearBtwn1: yBtw1,
      yearBtwn2: yBtw2,
      rateBelow: rBel,
      rateAbove: rAbo,
      rateBtwn1: rBtw1,
      rateBtwn2: rBtw2,
      radioYear: radY,
      radioRate: radR
    }, () => {
   this.searchForMovies();
    });
  
  }
//filter movies
  searchForMovies = () =>{
 
    let curList = [];
    let tempMovieArray = [];

    curList = this.props.movies;
    tempMovieArray = curList.filter(titles =>{
      const lc = titles.title.toLowerCase();
      const filter = this.state.inputTitle.toLowerCase();
      return lc.includes(filter);
     })
    

    if (this.state.radioYear === "before" && this.state.yearBefore !== null){
      tempMovieArray = tempMovieArray.filter( years =>{
      
        return years.release_date.substring(0,3) <= this.state.yearBefore;
      })
    }else if (this.state.radioYear === "after" && this.state.yearAfter !== null){
      tempMovieArray = tempMovieArray.filter( years =>{
      
        return years.release_date.substring(0,3) >= this.state.yearAfter;
      })
    }else if (this.state.radioYear === "between" && this.state.yearBtwn1 !== null && this.state.yearBtwn2 !== null){
      tempMovieArray = tempMovieArray.filter( years =>{
      
        return years.release_date.substring(0,3) >= this.state.yearBtwn1 && years.release_date.substring(0,3) <= this.state.yearBtwn2;
      })
    }

    if (this.state.radioRate === "below" && this.state.rateBelow !== null){
      tempMovieArray = tempMovieArray.filter( rate =>{
      
        return rate.ratings.average < this.state.rateBelow;
      })
    }else if (this.state.radioRate === "after" && this.state.rateAbove !== null){
      tempMovieArray = tempMovieArray.filter( rate =>{
      
        return rate.ratings.average >= this.state.rateAbove;
      })
    }else if (this.state.radioRate === "between" && this.state.rateBtwn1 !== null && this.state.rateBtwn2 !== null){
      tempMovieArray = tempMovieArray.filter( rate =>{
      
        return rate.ratings.average >= this.state.rateBtwn1 && rate.ratings.average <= this.state.rateBtwn2;
      })
    }
    this.setState({
      customList: tempMovieArray
    }, () => {
      this.props.populateMovieFilterList(this.state.customList);
    })
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
            <MovieFilters 
            getFilterData={this.getFilterData}
           inputTitle={this.state.inputTitle}
           yearBefore={this.state.yearBefore}
           yearAFter={this.state.yearAfter}
           yearBtwn1={this.state.yearBtwn1}
           yearBtwn2={this.state.yearBtwn2}
           rateBelow={this.state.rateBelow}
           rateAbove={this.state.rateAbove}
           rateBtwn1={this.state.rateBtwn1}
           rateBtwn2={this.state.rateBtwn2}
           radioBeforeY={this.state.radioBeforeY}
           radioAfterY={this.state.radioAfterY}
           radioBtwnY={this.state.radioBtwnY}
           customList={this.state.customList}
           populateMovieFilterList2={this.populateMovieFilterList2}
           updateState={this.updateState}/>
          </CSSTransition>
        </TransitionGroup>
        <div>
          
        <ListMatches
          listOfSearchedMovies={this.props.listOfSearchedMovies}
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
