
import Cart from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Menu from '../images/icon-menu.svg'

const Nav = ({toggleVisible}) => {
    return (
            <nav className="nav-bar px-2 py-4 d-flex justify-content-between align-items-center">
                
                <div className="menu-logo d-flex align-items-center">
                    <img className="menu " src={Menu} alt="menu" onClick={() => toggleVisible(true)}/>
                    <h1 >Sneakers</h1>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="cart-avatar d-flex align-items-center">
                    <img className="cart" src={Cart} alt="cart" srcset="" />
                    <img className="avatar" src={Avatar} alt="Avatar" srcset="" />
                </div>
            </nav>
    )
}

export default Nav
