import React, { Component } from 'react';

class Results extends Component {
  render() {
    const { artist, topTracks } = this.props;
    const topTrackElements = topTracks.map(track =>
      <li key={track.id}>{track.name}</li>
    );
    return (
      <div>
        {artist && <h1>{artist}</h1>}
        {topTracks &&
          <ul>{topTrackElements}</ul>
        }
      </div>
    );
  }
}

export default Results;
