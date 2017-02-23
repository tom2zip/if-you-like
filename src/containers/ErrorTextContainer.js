import { connect } from 'react-redux';
import ErrorText from '../components/ErrorText';

const mapStateToProps = state => ({
  searchText: state.search.searchText,
  error: state.search.error
});

const ErrorTextContainer = connect(
  mapStateToProps
)(ErrorText);

export default ErrorTextContainer;
