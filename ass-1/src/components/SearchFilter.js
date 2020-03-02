import React from "react";
/*this.props.filterYear;
  this.props.filterRating;*/
class SearchFilter extends React.Component {
  match = this.props.movies.filter(m => m.title === this.props.titleInp);
  title = this.props.titleInp;
}

export default SearchFilter;
