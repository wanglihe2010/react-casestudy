import React, { Component } from 'react';
import search_icon from './search_icon.svg';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  searchForm = (event) => {
    event.preventDefault();
    console.log("search form");
  }

  render() {
    return(
      <div className="container mid-position">
        <form onSubmit={this.searchForm}>
          <div className="embed-submit-field">
            <input className ="search-input" type="text" placeholder = "Search"></input>
            <button className = "search-btn" type="submit"></button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;