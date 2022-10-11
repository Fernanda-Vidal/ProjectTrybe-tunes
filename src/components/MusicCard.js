import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import '../index.css';

class MusicCard extends React.Component {
    state = {
      loading: false,
      isChecked: false,
    }

    componentDidMount() {
      const { isFavorite } = this.props;
      this.setState({ isChecked: isFavorite });
    }

    handleChecked = async ({ target }) => {
      const { checked } = target;
      const { id } = this.props;
      this.setState({
        loading: true,
        isChecked: checked,
      });
      const callGetMusics = await getMusics(id);
      if (checked) {
        await addSong(callGetMusics[0]);
      } else {
        await removeSong(callGetMusics[0]);
      }
      this.setState({ loading: false });
    }

    render() {
      const { musica, player, id } = this.props;
      const { isChecked, loading } = this.state;
      return (
        loading ? <Loading /> : (
          <div className="musica">
            <div className="musicName">
              <p>{ musica }</p>
            </div>
            <audio data-testid="audio-component" src={ player } controls>
              <track kind="captions" />
            </audio>
            <div className="fav">
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
          </div>
        )
      );
    }
}

MusicCard.propTypes = {
  musica: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default MusicCard;
