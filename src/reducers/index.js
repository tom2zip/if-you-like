import { REQUEST_ITEMS, RECEIVE_ARTIST, RECEIVE_TOP_TRACKS } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  isFetching: false,
  artist: '',
  topTracks: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_ITEMS:
    return Object.assign(state, { isFetching: true });
  case RECEIVE_ARTIST:
    return Object.assign(state, { artist: action.artist });
  case RECEIVE_TOP_TRACKS:
    return Object.assign(state, {
      isFetching: false,
      topTracks: action.topTracks
    });
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  search
});

export default rootReducer;