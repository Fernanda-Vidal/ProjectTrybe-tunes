import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
   state = {
     loading: true,
     user: '',
   }

   waitUser = async () => {
     const { name } = await getUser();
     this.setState({
       loading: false,
       user: name,
     });
   }

   componentDidMount = () => {
     this.waitUser();
   }

   render() {
     const { loading, user } = this.state;
     return (
       <header data-testid="header-component">
         { loading ? <Loading />
           : <p data-testid="header-user-name">{ user }</p> }
       </header>

     );
   }
}

export default Header;
