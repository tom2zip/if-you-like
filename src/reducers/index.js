import { SEARCH_TEXT_CHANGE } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  searchText: ''
};

const searchArtist = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_TEXT_CHANGE:
    return Object.assign(state, {
      searchText: action.searchText
    });
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  searchArtist
});

export default rootReducer;