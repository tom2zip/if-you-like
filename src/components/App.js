import React, { Component } from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import ResultsContainer from '../containers/ResultsContainer';
import Footer from '../components/Footer';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    const { isFetching, error }  = this.props;

    return (
      <div className="app container">
        <SearchBoxContainer></SearchBoxContainer>
        {isFetching && <div className="loader"></div>}
        {!isFetching && <ResultsContainer></ResultsContainer>}
        {error && <h4 className="error">Couldn't find similar artists. :(</h4>}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
