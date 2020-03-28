import React from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';


const Header = (props) => {
   return (
     <div className="header">
       <Link className="logo-container" to="/">
         <Logo />
       </Link>
       <div className="options">
         <Link className="option" to="/shop">Shop</Link>
         <Link className="option" to="/contact">Contact</Link>
         {
           props.currentUser ?
             <div 
                 className="option" 
                 onClick={ () => auth.signOut() }> SignOut </div>
           :
           <Link className="option" to="/signin">SignIn</Link>  
         }
       </div>
     </div>
   );
};

const mapStatefromProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStatefromProps)(Header);
