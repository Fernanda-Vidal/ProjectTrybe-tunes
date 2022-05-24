import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  state = {
    userInfos: '',
  }

  componentDidMount() {
    this.getUserAPI();
  }

  getUserAPI = async () => {
    const user = await getUser();
    this.setState({
      userInfos: user,
    });
    console.log(user);
  }

  render() {
    const { userInfos } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Profile</p>
        <img src={ userInfos.image } alt="foto" data-testid="profile-image" />
        <p>{ userInfos.name }</p>
        <p>{ userInfos.email }</p>
        <p>{ userInfos.description }</p>
        <Link to="/profile/edit">
          Editar perfil
        </Link>

      </div>
    );
  }
}

export default Profile;
