import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import '../index.css';
import phone from '../images/phone.png';

class Login extends React.Component {
  state = {
    inputName: '',
    isDisable: true,
    loading: false,
  }

  handleChangeInput = ({ target }) => {
    const { value } = target;
    const min = 3;
    this.setState({ inputName: value }, () => {
      if (value.length >= min) {
        this.setState({ isDisable: false });
      } else {
        this.setState({ isDisable: true });
      }
    });
  }

  handleSave = () => {
    this.setState({ loading: true }, async () => {
      const { inputName } = this.state;
      await createUser({ name: inputName });
      const { history } = this.props;
      history.push('/search');
    });
  }

  render() {
    const { isDisable, loading, inputName } = this.state;
    return (
      <div className="config">
        <div data-testid="page-login" id="login">
          <header className="headerLogin">
            <p className="p-login">TrybeTunes</p>
            <div id="imgLogin">
              <img src={ phone } alt="fone de ouvido" id="phone" />
            </div>
          </header>
          <input
            id="inputLogin"
            type="text"
            data-testid="login-name-input"
            name={ inputName }
            onChange={ this.handleChangeInput }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isDisable }
            onClick={ this.handleSave }
          >
            Entrar
          </button>
          {loading && <Loading />}
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
