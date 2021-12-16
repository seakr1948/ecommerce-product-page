import Avatar from '../images/image-avatar.png'
import Menu from '../images/icon-menu.svg'
import CartComponent from '../components/CartComponent'
import CartModal from './CartModal'
import { useState } from 'react/cjs/react.development'

const Nav = ({toggleVisible, cartQuantity, price, setCartQuantity}) => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
            <div className="nav-container">
                <nav className="nav-bar d-flex justify-content-between align-items-center">
                    
                    <div className="menu-logo d-flex">
                        
                        <img className="menu" src={Menu} alt="menu" onClick={() => toggleVisible(true)}/>
                        
                        
                        <h1 >Sneakers</h1>
                        <ul id="nav-links" >
                            <li className="d-flex justify-content-center align-items-center">
                                <button>Collections</button>
                            </li>
                            <li className="d-flex justify-content-center align-items-center">
                                <button>Men</button>
                            </li>
                            <li className="d-flex justify-content-center align-items-center">
                                <button>Women</button>
                            </li>
                            <li className="d-flex justify-content-center align-items-center">
                                <button>About</button>
                            </li>
                            <li className="d-flex justify-content-center align-items-center">
                                <button>Contacts</button>
                            </li>
                        </ul>
                    
                    </div>
                    
                    <div className="cart-avatar d-flex align-items-center">
                        <div className="cart-container">
                            <CartComponent cartQuantity={cartQuantity} isModal={modalOpen} toggleModal={setModalOpen}/>
                            <CartModal price={price} cartQuantity={cartQuantity} isModal={modalOpen} setCartQuantity={setCartQuantity}/>
                        </div>
                        
                        <img className="avatar" src={Avatar} alt="Avatar" srcset="" />
                    </div>
                </nav>
            </div>
    )
}

export default Nav
