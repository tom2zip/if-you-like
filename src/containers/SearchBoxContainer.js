import { connect } from 'react-redux';
import { clearState, initiateRequest } from '../actions';
import SearchBox from '../components/SearchBox';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (text) => {
      dispatch(clearState());
      dispatch(initiateRequest(text));
    }
  };
};

const SearchBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer;