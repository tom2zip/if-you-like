import React, { Component } from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import ResultsContainer from '../containers/ResultsContainer';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    const { isFetching }  = this.props;

    return (
      <div className="app container">
        <SearchBoxContainer></SearchBoxContainer>
        {!isFetching && <ResultsContainer></ResultsContainer>}
      </div>
    );
  }
}

export default App;
