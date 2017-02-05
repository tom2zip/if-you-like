import fetch from 'isomorphic-fetch';

const apiUrl = 'https://api.spotify.com/v1';

const REQUEST_ITEMS = 'REQUEST_ITEMS';
const requestItems = () => {
  return {
    type: REQUEST_ITEMS
  };
};

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const receiveItems = topTracks => {
  return {
    type: RECEIVE_ITEMS,
    artist: topTracks[0].artists[0].name,
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
    .then(relatedArtist => getTopTracks(relatedArtist.id))
    .then(topTracks => {
      dispatch(receiveItems(topTracks));
    });
};
