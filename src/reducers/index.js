import { REQUEST_ITEMS, RECEIVE_ITEMS } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  isFetching: false,
  artist: '',
  topTracks: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_ITEMS:
    return { ...state, isFetching: true };
  case RECEIVE_ITEMS:
    return {
      ...state,
      isFetching: false,
      artist: action.artist,
      topTracks: action.topTracks
    };
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  search
});

export default rootReducer;
