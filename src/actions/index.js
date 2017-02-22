import fetch from 'isomorphic-fetch';

const apiUrl = 'https://api.spotify.com/v1';

export const CLEAR_ARTIST = 'CLEAR_ARTIST';
export const clearArtist = () => {
  return {
    type: CLEAR_ARTIST
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
    topTracks: completeItem.topTracks,
    albums: completeItem.albums
  };
};

export const CHANGE_REGION = 'CHANGE_REGION';
export const changeRegion = region => {
  return {
    type: CHANGE_REGION,
    region
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

const getTopTracks = (id, region) => {
  return fetch(`${apiUrl}/artists/${id}/top-tracks?country=${region}`)
    .then(response => response.json())
    .then(json => json.tracks);
};

const getAlbums = (id, region) => {
  return fetch(`${apiUrl}/artists/${id}/albums?album_type=album&market=${region}`)
    .then(response => response.json())
    .then(json => json.items);
};

export const initiateRequest = searchText => (dispatch, getState) => {
  const region = getState().search.selectedRegion;
  let completeItem = {};
  dispatch(requestItems(searchText));
  getArtistId(searchText)
    .then(artistId => getRelatedArtist(artistId))
    .then(relatedArtist => {
      completeItem.artist = relatedArtist;
      return getTopTracks(relatedArtist.id, region);
    })
    .then(topTracks => {
      completeItem.topTracks = topTracks;
      return getAlbums(topTracks[0].artists[0].id, region);
    })
    .then(albums => {
      completeItem.albums = albums;
      dispatch(receiveItems(completeItem));
    });
};
