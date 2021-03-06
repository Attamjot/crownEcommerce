import React from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hidden}) => {
   return (
     <div className="header">
       <Link className="logo-container" to="/">
         <Logo />
       </Link>
       <div className="options">
         <Link className="option" to="/shop">Shop</Link>
         <Link className="option" to="/contact">Contact</Link>
         {
           currentUser ?
             <div 
                 className="option" 
                 onClick={ () => auth.signOut() }> SignOut </div>
           :
           <Link className="option" to="/signin">SignIn</Link>  
         }
         <CartIcon />
       </div>
       {
         hidden ? null : (<CartDropdown />)
       }
     </div>
   );
};

const mapStatefromProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStatefromProps)(Header);
