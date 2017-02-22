import { CLEAR_ARTIST, CHANGE_REGION, REQUEST_ITEMS, RECEIVE_ITEMS } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  searchText: '',
  isFetching: false,
  artist: '',
  topTracks: [],
  albums: [],
  selectedRegion: 'ca'
};

const search = (state = initialState, action) => {
  switch (action.type) {
  case CLEAR_ARTIST:
    return {
      ...state,
      artist: '',
      topTracks: [],
      albums: []
    };
  case CHANGE_REGION:
    return {
      ...state,
      selectedRegion: action.region
    };
  case REQUEST_ITEMS:
    return {
      ...state,
      searchText: action.searchText,
      isFetching: true,
    };
  case RECEIVE_ITEMS:
    return {
      ...state,
      isFetching: false,
      artist: action.artist,
      topTracks: action.topTracks,
      albums: action.albums
    };
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  search
});

export default rootReducer;
