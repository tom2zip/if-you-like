import fetch from 'isomorphic-fetch';

const apiUrl = 'https://api.spotify.com/v1';

export const CLEAR_STATE = 'CLEAR_STATE';
export const clearState = () => {
  return {
    type: CLEAR_STATE
  };
};

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
const requestItems = searchText => {
  return {
    type: REQUEST_ITEMS,
    searchText
  };
};

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
const receiveItems = completeItem => {
  return {
    type: RECEIVE_ITEMS,
    artist: completeItem.artist,
    artistImages: completeItem.artistImages,
    topTracks: completeItem.topTracks
  };
};

const getArtistId = artist => {
  return fetch(`${apiUrl}/search?type=artist&q=${artist}`)
    .then(response => response.json())
    .then(json => json.artists.items[0].id);
};

const getRelatedArtist = id => {
  return fetch(`${apiUrl}/artists/${id}/related-artists`)
    .then(response => response.json())
    .then(json => {
      const relatedArtists = json.artists;
      const randomIndex = Math.floor(Math.random() * relatedArtists.length);
      const randomRelatedArtist = relatedArtists[randomIndex];
      return randomRelatedArtist;
    });
};

const getTopTracks = id => {
  return fetch(`${apiUrl}/artists/${id}/top-tracks?country=US`)
    .then(response => response.json())
    .then(json => json.tracks);
};

export const initiateRequest = searchText => dispatch => {
  let completeItem = {};
  dispatch(requestItems(searchText));
  getArtistId(searchText)
    .then(artistId => getRelatedArtist(artistId))
    .then(relatedArtist => {
      completeItem.artist = relatedArtist.name;
      completeItem.artistImages = relatedArtist.images;
      return getTopTracks(relatedArtist.id);
    })
    .then(topTracks => {
      completeItem.topTracks = topTracks;
      dispatch(receiveItems(completeItem));
    });
};
