import React, { Component } from 'react';

class Results extends Component {
  render() {
    const { artist, artistImages, topTracks } = this.props;
    const topTrackElements = topTracks.map(track =>
      <li key={track.id}>{track.name}</li>
    );
    return (
      <div>
        {artist && <h1>{artist}</h1>}
        {artistImages.length > 0 &&
          <img 
            role="presentation"
            src={artistImages[artistImages.length - 1].url}
          >
          </img>
        }
        {topTracks &&
          <ul>{topTrackElements}</ul>
        }
      </div>
    );
  }
}

export default Results;
