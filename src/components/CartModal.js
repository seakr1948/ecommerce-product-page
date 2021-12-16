
import {ReactComponent as Delete} from '../images/icon-delete.svg';

const CartModal = ({price, cartQuantity, isModal, setCartQuantity}) => {
    return (
        <div className='cart-modal' id={isModal ? "cart-modal-open" : ''}>
            <div className="cart-modal-header">
                <p>Cart</p>
            </div>
            <div className="cart-modal-body p-4">
                { cartQuantity > 0 ? 
                <div className='container-fluid p-0 d-flex justify-content-between align-items-center'>
                    <div className='container-fluid d-flex flex-column p-0'>
                        <div className="container d-flex p-0 justify-content-between align-items-center">
                            <div className='cart-filled d-flex align-items-center justify-content-start'>
                                <img 
                                    src="images/image-product-1-thumbnail.jpg" 
                                    alt="Autumn Limited Edition Shoe" 
                                />
                                <p>Autumn Limited Edition... 
                                    <span className='cart-modal-price'>
                                    ${price} &times; {cartQuantity}<b> ${(price * cartQuantity).toFixed(2)}</b>
                                    </span>
                                </p>
                            </div>
                            <button className='delete-btn' onClick={() => setCartQuantity(0)}>
                                <div className="delete-icon">
                                    <Delete />
                                </div>
                            </button>
                        </div>
                        <button className='checkout-btn px-3 py-3'>Checkout</button>
                    </div> 
                </div>
                :
                <div className="cart-empty container p-0 d-flex justify-content-center align-items-center">
                    <p>Your cart is empty.</p>
                </div>
                }
                
                
                
            </div>
            
        </div>
    )
}

export default CartModal
