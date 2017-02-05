import React, { Component } from 'react';

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
        <span>I like: </span>
        <input type='text' ref='searchText' />
        <button type='submit'>Go</button>
      </form>
    );
  }
}

export default SearchBox;
