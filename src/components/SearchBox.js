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
          <h4>If you like: </h4>
          <input type="text" placeholder="radiohead" ref="searchText" />
          <h4>, you'll enjoy:</h4>
        </span>
        <p>(press enter)</p>
      </form>
    );
  }
}

export default SearchBox;
