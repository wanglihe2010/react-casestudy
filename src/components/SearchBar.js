import React, { Component } from 'react';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      searchKey: (queryString.parse(this.props.location.search).key || "")
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
    // const searchKey = (queryString.parse(this.props.location.search).key || "")
    // this.setState({searchKey: searchKey})
    console.log({searchkey: this.state.searchKey})
    return(
      <div className="container">
        <form onSubmit={this.searchForm} id="searchForm">
          <div className="embed-submit-field">
            <input className ="search-input" type="text" placeholder = {this.state.searchKey || "Search"} onChange={this.handleChange}></input>
            <button className = "search-btn" type="submit"></button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);