import React from "react";
import { Link } from "react-router-dom";
import "./css/Filter.css";

class MovieFilters extends React.Component {
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
      
    };

  }

  handleTitleChange = (e) => {
this.setState({ inputTitle: e.target.value});
console.log(this.props.inputTitle);
  };

 handleYearBeforeChange = (e) =>{
  this.setState({ yearBefore: e.target.value});
  }

 handleYearAfterChange = (e) =>{
  this.setState({yearAfter: e.target.value});
  
 } 

 handleYearBtwn1Change = (e) =>{
  this.setState({ yearBtwn1: e.target.value});
   } 

 handleYearBtwn2Change = (e) =>{
  this.setState({ yearBtwn2: e.target.value});
 } 

 handleRateBelowChange = (e) =>{
  this.setState({ rateBelow: e.target.value});
 } 

 handleRateAboveChange = (e) =>{
  this.setState({ rateAbove: e.target.value});
 }

 handleRateBtwn1Change = (e) =>{
  this.setState({ rateBtwn1: e.target.value});
 } 

 handleRateBtwn2Change = (e) =>{
  this.setState({ rateBtwn2: e.target.value});
 } 

 handleRadioYChange = (e) =>{
  this.setState({ radioYear: e.target.value});
   } 
   handleRadioRChange = (e) =>{
    this.setState({ radioRate: e.target.value});
     } 

handleSubmit = () => {
  this.props.updateState(
    this.state.inputTitle,
    this.state.yearBefore,
    this.state.yearAfter,
    this.state.yearBtwn1,
    this.state.yearBtwn2,
    this.state.rateBelow,
    this.state.rateAbove,
    this.state.rateBwtn1,
    this.state.rateBtwn2,
    this.state.radioYear,
    this.state.radioRate)
}

handleClear = () => {
this.setState({
yearBefore:"",
yearAfter:""
  });
 
};

  render() {
    return (
      <div className="MovieFilter">
        <h2>Movie Filter</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="TitleFilter">
            <h3>Title</h3>
            <input type="text" name="title" value={this.state.inputTitle} onChange={this.handleTitleChange}/>
          </div>

          <div className="YearFilter">
            <h3>Year</h3>
            <input type="radio" name="Year" value="before" onChange={this.handleRadioYChange}/>
            <label> Before </label>
            <input type="text" name="before-year" value={this.state.yearBefore} onChange={this.handleYearBeforeChange}/>
            <br />

            <input type="radio" name="Year" value="after" onChange={this.handleRadioYChange}/>
            <label> After </label>
            <input type="text" name="after-year" value={this.state.yearAfter} onChange={this.handleYearAfterChange}/>
            <br />

            <input type="radio" name="Year" value="between" onChange={this.handleRadioYChange}/>
            <label> Between </label>
            <input type="text" name="between-year-1" value={this.state.yearBtwn1} onChange={this.handleYearBtwn1Change} />
            <br />
            <input type="text" name="between-year-2" value={this.state.yearBtwn2} onChange={this.handleYearBtwn2Change}/>
            <br />
          </div>

          <div className="RatingFilter">
            <h3>Rating</h3>
            <input type="radio" name="Rating" value="below" onChange={this.handleRadioRChange} />
            <label>Below</label>
            <input type="range" min="0" max="10" className="slider" value={this.state.rateBelow} onChange={this.handleRateBelowChange}/>
            <br />

            <input type="radio" name="Rating" value="above" onChange={this.handleRadioRChange} />
            <label>Above</label>
            <input type="range" min="0" max="10" className="slider" value={this.state.rateAbove} onChange={this.handleRateAboveChange}/>
            <br />

            <input type="radio" name="Rating" value="between" onChange={this.handleRadioRChange}/>
            <label>Between</label>
            <input type="range" min="0" max="10" className="slider" value={this.state.rateBtwn1} onChange={this.handleRateBtwn1Change}/>
            <input type="range" min="0" max="10" className="slider" value={this.state.rateBtwn2} onChange={this.handleRateBtwn2Change}/>
            <br />
          </div>
          <div className = "submitFilter">
          <input type="submit" name="Filter" value="Filter" onClick={this.handleSubmit} className="submitBtn"/>
          <button onClick={this.handleClear}>Clear</button>
          </div>
        </form>
      </div>
    );
  }
}
export default MovieFilters;
