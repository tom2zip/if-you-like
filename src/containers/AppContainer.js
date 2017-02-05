import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  isFetching: state.search.isFetching
});

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
