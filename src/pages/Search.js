import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

class Search extends React.Component {
  state = {
    inputArtist: '',
    isDisable: true,
    loading: false,
    albumList: [],
    artist: '',
    // invalidArtist: '',
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputArtist: value }, () => {
      if (value.length >= 2) {
        this.setState({ isDisable: false });
      } else {
        this.setState({ isDisable: true });
      }
    });
  };

  handleClick = async (inputArtist) => {
    this.setState({ loading: true });
    const albuns = await searchAlbumsAPI(inputArtist);
    this.setState({
      albumList: [...albuns],
      loading: false,
      inputArtist: '',
    });
    if (inputArtist.length > 0) {
      this.setState({ artist: inputArtist });
    }
  }

  render() {
    const { isDisable, inputArtist, loading, albumList, artist } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search-artist-Input">
            <input
              type="text"
              data-testid="search-artist-input"
              value={ inputArtist }
              onChange={ this.handleChange }
            />

          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            value="Pesquisar"
            disabled={ isDisable }
            onClick={ async () => { await this.handleClick(inputArtist); } }
            // onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          { loading && <Loading /> }
        </form>
        { albumList.length > 0 ? (
          <h3>
            Resultado de álbuns de:
            {' '}
            { artist }
          </h3>) : <p>Nenhum álbum foi encontrado</p> }
        { albumList
          .map(({ artworkUrl100, collectionName, artistName, collectionId }, index) => (
            (
              <Link
                key={ index }
                to={ `/album/${collectionId}` }
                data-testid={ `link-to-album-${collectionId}` }
              >
                <img src={ artworkUrl100 } alt={ collectionName } />
                <p>{ collectionName }</p>
                <p>{ artistName }</p>
              </Link>
            )
          ))}
      </div>
    );
  }
}

export default Search;
