import React, { Component } from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import ResultsContainer from '../containers/ResultsContainer';

class App extends Component {
  render() {
    const { isFetching }  = this.props;
    return (
      <div>
        <SearchBoxContainer></SearchBoxContainer>
        {!isFetching && <ResultsContainer></ResultsContainer>}
      </div>
    );
  }
}

export default App;
