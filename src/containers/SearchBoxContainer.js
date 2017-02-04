import { connect } from 'react-redux';
import { searchTextChange } from '../actions';
import SearchBox from '../components/SearchBox';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTextChange: (text) => {
      console.log(text);
      dispatch(searchTextChange(text));
    }
  };
};

const SearchBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer;