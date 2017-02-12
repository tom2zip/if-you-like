import { connect } from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = state => ({
  searchText: state.search.searchText,
  artist: state.search.artist,
  topTracks: state.search.topTracks,
  albums: state.search.albums
});

const ResultsContainer = connect(
  mapStateToProps
)(Results);

export default ResultsContainer;
