import React from 'react'

import {ReactComponent as Cart } from '../images/icon-cart.svg';
const CartComponent = ({cartQuantity, isModal, toggleModal}) => {
    return (
        <button onClick={() => {
            toggleModal(!isModal)
        }}>
            <div className="cart-icon">
                <Cart />
                <span id={cartQuantity > 0 ? "cart-filled" : ''}>{cartQuantity}</span>
            </div>
        </button>
        
    )
}

export default CartComponent
