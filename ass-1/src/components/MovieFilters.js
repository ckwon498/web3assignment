import React from "react";
import { Link } from "react-router-dom";
import "./css/Filter.css";

class MovieFilters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MovieFilter">
        <h2>Movie Filter</h2>
        <form>
          <div className="TitleFilter">
            <h3>Title</h3>
            <input type="text" name="title" />
          </div>

          <div className="YearFilter">
            <h3>Year</h3>
            <input type="radio" name="Year" value="before" />
            <label> Before </label>
            <input type="text" name="before-year" />
            <br />

            <input type="radio" name="Year" value="after" />
            <label> After </label>
            <input type="text" name="after-year" />
            <br />

            <input type="radio" name="Year" value="between" />
            <label> Between </label>
            <input type="text" name="between-year-1" />
            <br />
            <input type="text" name="between-year-2" />
            <br />
          </div>

          <div className="RatingFilter">
            <h3>Rating</h3>
            <input type="radio" name="Rating" value="below" />
            <label>Below</label>
            <input type="range" min="0" max="10" className="slider" />
            <br />

            <input type="radio" name="Rating" value="above" />
            <label>Above</label>
            <input type="range" min="0" max="10" className="slider" />
            <br />

            <input type="radio" name="Rating" value="between" />
            <label>Between</label>
            <input type="range" min="0" max="10" className="slider" />
            <input type="range" min="0" max="10" className="slider" />
            <br />
          </div>
          <div className = "submitFilter">
          <input type="submit" name="Filter" value="Filter" />
          <button>Clear</button>
          </div>
        </form>
      </div>
    );
  }
}
export default MovieFilters;
