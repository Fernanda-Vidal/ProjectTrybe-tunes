import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import '../index.css';
import phone from '../images/phoneGreen.png';

class Header extends React.Component {
   state = {
     user: '',
   }

   waitUser = async () => {
     const { name } = await getUser();
     this.setState({
       user: name,
     });
   }

   componentDidMount = () => {
     this.waitUser();
   }

   render() {
     const { user } = this.state;
     return (
       <header data-testid="header-component" className="header">
         <div id="imgLogin">
           <img src={ phone } alt="fone de ouvido" id="phone" />
         </div>
         <div id="nav">
           <p data-testid="header-user-name">{ user }</p>
           <nav>
             {/* <ul> */}
             <Link className="link" to="/search" data-testid="link-to-search">
               Search
             </Link>
             <Link className="link" to="/favorites" data-testid="link-to-favorites">
               Favorites
             </Link>
             <Link
               className="link"
               to="/profile"
               data-testid="link-to-profile"
             >
               Profile

             </Link>
             {/* </ul> */}
           </nav>
         </div>
       </header>

     );
   }
}

export default Header;
