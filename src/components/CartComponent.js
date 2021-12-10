import React from 'react'

import {ReactComponent as Cart } from '../images/icon-cart.svg';
const CartComponent = ({cartQuantity}) => {
    return (
        <div class="cart-icon">
            <Cart />
            <span id={cartQuantity > 0 ? "cart-filled" : ''}>{cartQuantity}</span>
        </div>
    )
}

export default CartComponent
