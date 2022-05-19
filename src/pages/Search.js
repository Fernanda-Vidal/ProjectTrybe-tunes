import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    inputArtist: '',
    isDisable: true,
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

  render() {
    const { isDisable, inputArtist } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search-artist-input">
            <input
              type="text"
              data-testid="search-artist-input"
              name={ inputArtist }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            data-testid="search-artist-button"
            value="Pesquisar"
            disabled={ isDisable }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
