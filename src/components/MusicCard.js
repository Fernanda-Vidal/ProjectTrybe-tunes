import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
    state = {
      loading: false,
      isChecked: false,
    }

    handleChecked = async ({ target }) => {
      const { checked } = target;
      const { id } = this.props;
      this.setState({
        loading: true,
        isChecked: checked,
      });
      if (checked) {
        await addSong(await getMusics(id));
      }
      this.setState({ loading: false });
    }

    render() {
      const { musica, player, id } = this.props;
      const { isChecked, loading } = this.state;
      return (
        loading ? <Loading /> : (

          <div>
            <p>{ musica }</p>
            <audio data-testid="audio-component" src={ player } controls>
              <track kind="captions" />
            </audio>
            <label htmlFor="favorita">
              Favorita
              <input
                type="checkbox"
                name="favorita"
                data-testid={ `checkbox-music-${id}` }
                checked={ isChecked }
                onChange={ this.handleChecked }
              />
            </label>
          </div>
        )
      );
    }
}

MusicCard.propTypes = {
  musica: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MusicCard;
