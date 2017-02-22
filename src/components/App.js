import React, { Component } from 'react';
import RegionPickerContainer from '../containers/RegionPickerContainer';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import ResultsContainer from '../containers/ResultsContainer';
import Footer from '../components/Footer';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    const { isFetching }  = this.props;

    return (
      <div className="app container">
        <RegionPickerContainer></RegionPickerContainer>
        <SearchBoxContainer></SearchBoxContainer>
        {isFetching && <div className="loader"></div>}
        {!isFetching && <ResultsContainer></ResultsContainer>}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
