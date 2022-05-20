import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musica, player } = this.props;
    return (
      <div>
        <p>{ musica }</p>
        <audio data-testid="audio-component" src={ player } controls>
          <track kind="captions" />
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musica: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
};

export default MusicCard;
