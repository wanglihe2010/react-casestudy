import React, { Component } from 'react';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      searchKey: ""
    }
  }

  handleChange = (event) => {
    this.setState({searchKey: event.target.value})
  }
  searchForm = (event) => {
    event.preventDefault();
    this.props.history.push("/search?key=" + this.state.searchKey);
  }

  render() {
    return(
      <div className="container">
        <form onSubmit={this.searchForm} id="searchForm">
          <div className="embed-submit-field">
            <input className ="search-input" type="text" placeholder = "Search" onChange={this.handleChange}></input>
            <button className = "search-btn" type="submit"></button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);