import React from 'react';
import { Link } from 'react-router-dom';
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
         <nav>
           <ul>
             <li><Link to="/search" data-testid="link-to-search">Search</Link></li>
             <li>
               <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
             </li>
             <li><Link to="/profile" data-testid="link-to-profile">Profile</Link></li>
           </ul>
         </nav>
       </header>

     );
   }
}

export default Header;
