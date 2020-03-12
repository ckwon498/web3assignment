import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeView from "./components/HomeView.js";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import DefaultView from "./components/DefaultView.js";
import { CSSTransition } from "react-transition-group";
import Modal from "./components/Modal.js";
import CastView from "./components/CastView"
import MovieDetailsView from "./components/MovieDetailsView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchedAll: true,
      movies: [],
      IsOpen: false,
      favourites: [],
      altFav: [],
      filteredByTitles:[],
      listOfSearchedMovies: []
    };
  }
//movie search by title
searchTitle = (e) => {
  let curList = [];
  let newList = [];

  if (e.target.value !==""){
    curList = this.state.movies;

    newList = curList.filter(titles =>{
      const lc = titles.title.toLowerCase();
      const filter = e.target.value.toLowerCase();
      return lc.includes(filter);

    });
  }else
  {
    newList = this.state.movies;
    
  }
  this.setState({
    filteredByTitles: newList
  });
  console.log(this.state.filteredByTitles)
}
 
   //checks modal state open or close
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  //moveis data
  componentsWillUpdate(json) {
    //Converts fetched JSON data into string and store in local storage
    localStorage.setItem("moviesAPI", JSON.stringify(json));
  }

  updateState = () => {
    console.log(this.state.isLoading);
    //Checks if local storage is set and if there is a state
    if (localStorage.getItem("moviesAPI") !== null) {
      //this.sortLS();
      console.log("API exists in Local Storage");
      this.setState({
        movies: JSON.parse(localStorage.getItem("moviesAPI")),
        isLoading: false
      });
      // this.sortByTitle();
    } else {
      console.log("API does not exist in Local Storage");
    }
  };

  async componentDidMount() {
    if (localStorage.getItem("moviesAPI") === null) {
      try {
        const url =
          "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
        const response = await fetch(url);
        const jsonData = await response.json();
        this.componentsWillUpdate(jsonData);
        console.log("Fetched Data Successful. ");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Data already loaded.");
    }
    this.updateState();
  }
//adding fav event handler
  handleAddFav = movie => {
    let currentFav = this.state.favourites.slice(0);
    let newFav = [...currentFav];

    newFav.push(movie);

    console.log(newFav);
    if (!currentFav.includes(movie.id)) {
      this.setState({
        favourites: newFav
      });
      console.log(this.state.favourites);
      localStorage.setItem("altFav", newFav);
    }
    if (this.state.favourites.find(m => m.title === movie.title)) {
      this.handleDeleteFav(movie);
    }
  };
//removing fav handler
  handleDeleteFav = movie => {
    const list = this.state.favourites.slice(0);
    list.splice(list.indexOf(movie), 1);
    this.setState({
      favourites: list
    });
    localStorage.setItem("altFav", list);
  };
//checking if show all movie button pressed
  clickedSearchAll = () => {
    this.setState({
      searchedAll: true 
    }, () => {
      this.checkSearchType()});
    
    console.log(this.state.searchedAll);
  };
//checking of filter by title button pressed
  clickedSearchTitle = () => {
    this.setState({
      searchedAll: false
    }, () => {
      this.checkSearchType()});
    console.log(this.state.searchedAll);
    return (this.state.filteredByTitles);
  };
//sorting movies aray from json daya alphabetically
  sortAlpha = () => {
    let tempMovie = Array.from(this.state.movies);
    tempMovie.sort((a, b) => a.title - b.title);
    this.setState({ movies: tempMovie });
  };
  //fill in the array for if title is searched
  checkSearchType = async () => {

    if (this.state.searchedAll) {
      this.setState({listOfSearchedMovies: this.state.movies});
    } 
    else if (!this.state.searchedAll) {
      this.setState({listOfSearchedMovies: this.state.filteredByTitles});
    }
    console.log(this.state.listOfSearchedMovies);
  };

  populateMovieFilterList = (customList) => {
    this.setState({
      listOfSearchedMovies: customList
    })
  }


  render() {
    return (
      <div className="App">
        <main>
          <Route
            path="/"
            exact
            render={props => (
              <HomeView
                movies={this.state.movies}
                clickedSearchAll={this.clickedSearchAll}
                searchedAll={this.state.searchedAll}
                clickedSearchTitle={this.clickedSearchTitle}
                sortAlpha={this.sortAlpha}
                //filterTitle={this.filterTitle}
                clickedSearchTitle={this.clickedSearchTitle}
                searchTitle ={this.searchTitle}
               // checkSearchType={this.checkSearchType}
              />
            )}
          />
          <Route
            path="/DefaultView"
            exact
            render={props => (
              <DefaultView
                movies={this.state.movies}
                clickedSearchAll={this.clickedSearchAll}
                searchedAll={this.state.searchedAll}
                clickedSearchTitle={this.clickedSearchTitle}
                sortAlpha={this.sortAlpha}
                show={this.state.isOpen}
                onClose={this.toggleModal}
                handleAddFav={this.handleAddFav}
                handleDeleteFav={this.handleDeleteFav}
                favourites={this.state.favourites}
                filterTitle={this.filterTitle}
                listOfSearchedMovies={this.state.listOfSearchedMovies}
                populateMovieFilterList={this.populateMovieFilterList}
              />
            )}
          />
           <Route
            path="/CastView"
            exact
            render={props => (
          <CastView  
                handleAddFav={this.handleAddFav}
                handleDeleteFav={this.handleDeleteFav}
                favourites={this.state.favourites}
                show={this.state.isOpen}
                onClose={this.toggleModal}/>
                )} />
                <Route
            path="/MovieDetailsView"
            exact
            render={props => (
          <MovieDetailsView 
                handleAddFav={this.handleAddFav}
                handleDeleteFav={this.handleDeleteFav}
                favourites={this.state.favourites}
                show={this.state.isOpen}
                onClose={this.toggleModal}/>
                )} />
          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            </Modal>
        </main>
      </div>
    );
  }
}

export default App;
