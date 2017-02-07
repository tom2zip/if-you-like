import React, { Component } from 'react';
import '../stylesheets/SearchBox.css';

class SearchBox extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchTextValue = this.refs.searchText.value;
    this.props.onSearch(searchTextValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>
          <h1>I like: </h1>
          <input type="text" placeholder="radiohead" ref="searchText" />
          <button type="submit">Go</button>
        </span>
      </form>
    );
  }
}

export default SearchBox;
