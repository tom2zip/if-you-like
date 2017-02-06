import { connect } from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = state => ({
  artist: state.search.artist,
  artistImages: state.search.artistImages,
  topTracks: state.search.topTracks
});

const ResultsContainer = connect(
  mapStateToProps
)(Results);

export default ResultsContainer;
