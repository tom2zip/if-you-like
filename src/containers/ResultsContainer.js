import { connect } from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = state => ({
  searchText: state.search.searchText,
  artist: state.search.artist,
  artistImages: state.search.artistImages,
  topTracks: state.search.topTracks
});

const ResultsContainer = connect(
  mapStateToProps
)(Results);

export default ResultsContainer;
