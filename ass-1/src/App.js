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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchedAll: "All",
      movies: [],
      IsOpen: false,
      favourites: [],
      altFav: [],
      filteredByTitles:[]
    };
  }

  //movie filter by title
  filterTitle = (titleFilter) =>{
    let filteredByTitles = this.state.movies
    filteredByTitles = filteredByTitles.filter((titles) =>{
      let titleName = titles.title.toLowerCase()
      return titleName.indexOf(titleFilter.toLowerCase()) !== -1
    })
    this.setState({filteredByTitles})
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
      searchedAll: "All"
    });
    console.log(this.state.searchedAll);
  };
//checking of filter by title button pressed
  clickedSearchTitle = () => {
    this.setState({
      searchedAll: "Title"
    });
    console.log(this.state.searchedAll);
  };
//sorting movies aray from json daya alphabetically
  sortAlpha = () => {
    let tempMovie = Array.from(this.state.movies);
    tempMovie.sort((a, b) => a.title - b.title);
    this.setState({ movies: tempMovie });
    console.log("hi");
  };

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
                filterTitle={this.filterTitle}
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
          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            </Modal>
        </main>
      </div>
    );
  }
}

export default App;
