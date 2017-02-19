import React, { Component } from 'react';
import '../stylesheets/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span>powered by <a href="https://developer.spotify.com/" target="_blank">Spotify</a></span>
      </div>
    );
  }
}

export default Footer;
