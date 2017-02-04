import React, { Component } from 'react';

class SearchBox extends Component {

  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  onSubmitClick(e) {
    console.log('ya');
  }

  render() {
    return (
      <div>
        <span>I like: </span>
        <input type='text' onChange={e => this.onSearchTextChange(e)}></input>
        <button onClick={this.onSubmitClick}>Submit</button>
      </div>
    );
  }
}

export default SearchBox;
