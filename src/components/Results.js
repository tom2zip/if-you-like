import React, { Component } from 'react';
import '../stylesheets/Results.css';

class Results extends Component {
  render() {
    const { artist, topTracks, albums } = this.props;
    const topTrackElements = topTracks.map(track =>
      <tr key={track.id}>
        <td>{track.name}</td>
      </tr>
    );
    const albumElements = albums.map(album =>
      <tr key={album.id}>
        <td>{album.name}</td>
      </tr>
    );

    return (
      <div>
        {artist && <h1>{artist}</h1>}
        {topTracks.length > 0 &&
          <table>
            <thead>
              <tr>
                <th>Top Tracks</th>
              </tr>
            </thead>
            <tbody>
              {topTrackElements}
            </tbody>
          </table>
        }
        {albums.length > 0 &&
          <table>
            <thead>
              <tr>
                <th>Albums</th>
              </tr>
            </thead>
            <tbody>
              {albumElements}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

export default Results;
