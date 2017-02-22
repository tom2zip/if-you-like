import { connect } from 'react-redux';
import { clearArtist, initiateRequest } from '../actions';
import SearchBox from '../components/SearchBox';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (text) => {
      dispatch(clearArtist());
      dispatch(initiateRequest(text));
    }
  };
};

const SearchBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer;
