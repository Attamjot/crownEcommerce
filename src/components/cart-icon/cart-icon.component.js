import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count"> {itemsCount} </span>
    </div>
);

const mapStateToProps = state => {
    console.log("CartIcon: I'm being called");
    return {
      itemsCount: selectCartItemsCount(state)
    };
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);