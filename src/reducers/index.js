import {
  CLEAR_ARTIST,
  CHANGE_REGION,
  FAILED_SEARCH,
  REQUEST_ITEMS,
  RECEIVE_ITEMS
} from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  searchText: '',
  isFetching: false,
  artist: '',
  topTracks: [],
  albums: [],
  selectedRegion: 'ca',
  error: false,
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
  case FAILED_SEARCH:
    return {
      isFetching: false,
      artist: '',
      topTracks: [],
      albums: [],
      error: true
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
