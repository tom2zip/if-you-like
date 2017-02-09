import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  artist: state.search.artist
});

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
