import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class AlbumCard extends React.Component {
  render() {
    const { id, imgUrl, album, artist } = this.props;
    return (
      <Link to={ `/album/${id}` } className="link">
        <div className="albumName">
          <div className="imgAlbum">
            <img src={ imgUrl } alt={ album } />
          </div>
          <div className="infoAlbum">
            <p>
              Album:
              {' '}
              { album }
            </p>
            <p>
              Artista:
              {' '}
              { artist }
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default AlbumCard;
