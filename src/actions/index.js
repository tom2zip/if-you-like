import fetch from 'isomorphic-fetch';

const apiUrl = 'https://api.spotify.com/v1';

const REQUEST_ITEMS = 'REQUEST_ITEMS';
const requestItems = () => {
  return {
    type: REQUEST_ITEMS
  };
};

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const receiveArtist = artist => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};

export const RECEIVE_TOP_TRACKS = 'RECEIVE_TOP_TRACKS';
export const receiveTopTracks = topTracks => {
  return {
    type: RECEIVE_TOP_TRACKS,
    topTracks
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
  dispatch(requestItems());
  getArtistId(searchText)
    .then(artistId => getRelatedArtist(artistId))
    .then(relatedArtist => {
      dispatch(receiveArtist(relatedArtist));
      return getTopTracks(relatedArtist.id);
    })
    .then(topTracks => {
      dispatch(receiveTopTracks(topTracks));
    });
};
