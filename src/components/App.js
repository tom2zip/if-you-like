import React, { Component } from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import ResultsContainer from '../containers/ResultsContainer';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    const { isFetching, artist }  = this.props;

    return (
      <div className="app container">
        <div className="col-sm-6">
          {!artist && <SearchBoxContainer></SearchBoxContainer>}
          {!isFetching && <ResultsContainer></ResultsContainer>}
        </div>
        <div className="col-sm-6">
        </div>
      </div>
    );
  }
}

export default App;
