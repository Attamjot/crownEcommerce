import React from 'react';
import CustomButon from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length  
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
                : (<span className="empty-message">Your cart is empty.</span>)
            }
        </div>
        <CustomButon onClick={ () => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>Go to Checkout Page</CustomButon>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));