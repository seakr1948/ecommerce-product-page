
import Cart from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Menu from '../images/icon-menu.svg'

const Nav = () => {
    return (
            <nav className="nav-bar px-2 py-4 d-flex justify-content-between align-items-center">
                
                <div className="menu-logo d-flex align-items-center">
                    <img className="menu " src={Menu} alt="menu" />
                    <h1 className="outline">Sneakers</h1>
                </div>
                <div className="cart-avatar d-flex align-items-center">
                    <img className="cart" src={Cart} alt="cart" srcset="" />
                    <img className="avatar" src={Avatar} alt="Avatar" srcset="" />
                </div>
            </nav>
    )
}

export default Nav
