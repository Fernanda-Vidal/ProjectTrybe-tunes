import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

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
      const { input } = this.state;
      await createUser({ name: input });
      const { history } = this.props;
      history.push('/search');
    });
  }

  render() {
    const { isDisable, loading, inputName } = this.state;
    return (
      <div data-testid="page-login">
        <input
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
        {loading && <p>Loading...</p>}
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
