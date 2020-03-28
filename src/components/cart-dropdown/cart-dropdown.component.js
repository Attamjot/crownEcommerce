import React from 'react';
import CustomButon from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButon>Go to Checkout Page</CustomButon>
    </div>
);

export default CartDropdown;