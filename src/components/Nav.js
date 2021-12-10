

import Avatar from '../images/image-avatar.png'
import Menu from '../images/icon-menu.svg'
import CartComponent from '../components/CartComponent'

const Nav = ({toggleVisible, cartQuantity}) => {
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
                        <CartComponent cartQuantity={cartQuantity}/>
                        <img className="avatar" src={Avatar} alt="Avatar" srcset="" />
                    </div>
                </nav>
            </div>
    )
}

export default Nav
