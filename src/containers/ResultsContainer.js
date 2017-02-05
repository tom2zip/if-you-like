import { connect } from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = state => {
  return {
    artist: state.search.artist,
    topTracks: state.search.topTracks
  };
};

const ResultsContainer = connect(
  mapStateToProps
)(Results);

export default ResultsContainer;
