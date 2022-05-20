import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  state = {
    musicList: [],
    loading: false,
    music: [],
  }

  componentDidMount = () => {
    this.getMusicList();
  }

  getMusicList = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    // console.log(id);
    this.setState({ loading: true });
    const arrayMusics = await getMusics(id);
    this.setState({
      music: arrayMusics,
      loading: false,
      musicList: arrayMusics.map(({
        artistName, collectionName, artworkUrl100, trackName, previewUrl }) => (
        { artistName, collectionName, artworkUrl100, trackName, previewUrl }
      )).filter(({ previewUrl }) => previewUrl),
    });
    console.log(this.state.musicList);
  }

  render() {
    const { loading, musicList, music } = this.state;
    // console.log(this.props);
    return (
      <div data-testid="page-album">
        <Header />
        <p>Album</p>
        { loading && <Loading /> }
        {music.length > 0 && (
          <div>
            <img src={ music[0].artworkUrl100 } alt="capa" />
            <p data-testid="artist-name">{music[0].artistName}</p>
            <p data-testid="album-name">{music[0].collectionName }</p>
          </div>
        ) }
        { musicList.map(({ trackName, previewUrl }, index) => (
          <MusicCard
            key={ index }
            musica={ trackName }
            player={ previewUrl }
          />
        ))}

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
