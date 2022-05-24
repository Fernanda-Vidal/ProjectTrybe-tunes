// import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  state = {
    favorites: [],
    isLoading: false,
  }

  componentDidMount() {
    this.savedSongs();
  }

  savedSongs = async () => {
    this.setState({ isLoading: true });
    const favorites = await getFavoriteSongs();
    this.setState({
      isLoading: false,
      favorites,
    });
  }

  render() {
    const { isLoading, favorites } = this.state;
    // console.log(favorites);
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>Favorites</p>
        { isLoading && <Loading /> }
        { favorites.map(({ trackName, previewUrl, trackId }) => (
          <MusicCard
            key={ trackId }
            musica={ trackName }
            player={ previewUrl }
            id={ trackId }
            isFavorite
          />
        )) }
      </div>
    );
  }
}

// Favorites.propTypes = {
//   checked: PropTypes.bool.isRequired,
// }

export default Favorites;
