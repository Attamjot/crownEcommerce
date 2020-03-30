import React from 'react';
import CustomButon from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
            }
        </div>
        <CustomButon>Go to Checkout Page</CustomButon>
    </div>
);

const mapStateToProps = state => {
    console.log('Cart Dashboard being called');
    return {
      cartItems: selectCartItems(state)
    };
}

export default connect(mapStateToProps)(CartDropdown);