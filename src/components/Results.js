import React, { Component } from 'react';
import '../stylesheets/Results.css';

class Results extends Component {
  render() {
    const { artist, topTracks, albums } = this.props;
    const topTrackElements = topTracks.map(track =>
      <tr key={track.id}>
        <td><a href={track.external_urls.spotify} target="_blank">{track.name}</a></td>
      </tr>
    );
    const albumElements = albums.map(album =>
      <tr key={album.id}>
        <td><a href={album.external_urls.spotify} target="_blank">{album.name}</a></td>
      </tr>
    );

    return (
      <div>
        {artist && <p>you'll also enjoy:</p>}
        {artist && <h1><a href={artist.external_urls.spotify} target="_blank">{artist.name}</a></h1>}
        {topTracks.length > 0 &&
          <table className="top-tracks-table">
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
          <table className="albums-table">
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
