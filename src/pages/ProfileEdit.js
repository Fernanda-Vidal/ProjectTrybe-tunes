import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  state = {
    isLoading: false,
    userName: {},
    isDisable: true,
  }

  componentDidMount() {
    this.callGetUser();
  }

  callGetUser = async () => {
    this.setState({ isLoading: true });
    const user = await getUser();
    this.setState({
      isLoading: false,
      userName: user,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(({ userName: {
      user: { [name]: value },
    } }));
    // console.log(target)
    this.habilitaButton({ target });
  }

  // //NÃO CONSIGO HABILITAR O BOTÃO.
  //   habilitaButton = ({ target }) => {
  //     const { userName: { name, email, description } } = target;
  //     console.log(target.name)
  //     if (name.length > 0 && email.length && description.length) {
  //       this.setState({ isDisable: false });
  //     } else {
  //       this.setState({ isDisable: true });
  //     }
  //   }

  render() {
    const { userName, isLoading, isDisable } = this.state;
    const { name, email, description, image } = userName;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        { isLoading && <Loading /> }
        <p className="p">ProfileEdit</p>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            name="name"
            data-testid="edit-inpu-name"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            id="email"
            name="email"
            data-testid="edit-input-email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <textarea
            id="description"
            name="description"
            data-testid="edit-input-description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="image">
          Escolha uma imagem:
          <input
            type="text"
            id="image"
            name="image"
            data-testid="edit-input-image"
            value={ image }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="edit-button-save"
          disabled={ isDisable }
        >
          Salvar Alterações
        </button>
      </div>
    );
  }
}

export default ProfileEdit;
