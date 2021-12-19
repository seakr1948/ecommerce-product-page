
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


import Nav from './components/Nav';
import LightBox from './components/LightBox';
import SideNav from './components/SideNav';
import LightBoxModal from './components/LightBoxModal';

import {ReactComponent as Minus} from './images/icon-minus.svg';
import {ReactComponent as Plus} from './images/icon-plus.svg';
import {ReactComponent as Cart} from './images/icon-cart.svg';

function App() {

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isLightBoxVisible, setIsLightBoxVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const price_msrp = 250;
  const discount = 0.5
  const price_actual = price_msrp - (price_msrp * discount)
  const increment = () => {
    setQuantity(quantity + 1);
  }

  const decrement = () => {
    setQuantity(quantity - 1);
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <div className="side-nav-overlay" id={(isNavVisible || isLightBoxVisible) ? "nav-open" : ''}></div>
      {isLightBoxVisible ? <LightBoxModal toggleVisible={setIsLightBoxVisible}/> : ''}
      
        <div className="container-fluid p-0 page-container">
          
          <SideNav toggleVisible={setIsNavVisible} visible={isNavVisible}/>
          
          
          
          <Nav toggleVisible={setIsNavVisible} cartQuantity={cartQuantity} price={price_actual} setCartQuantity={setCartQuantity} />
          
          <div className="page-body d-flex justify-content-center">

            <LightBox toggleModal={setIsLightBoxVisible}/>
            <div>
              <section className="product-description p-4">
              <h1>Sneaker Company</h1>
              <h2>Fall Limited Edition Sneakers</h2>
              <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            
            <div className="price d-flex flex-nowrap">
              <div className="d-flex align-items-center">
                <p id="price-actual">${price_actual.toFixed(2)}</p>
                <p id="discount" className="px-2">{discount * 100}%</p>
              </div>
              <div>
              <p id="price-msrp">${price_msrp.toFixed(2)}</p>
              </div>
              
            </div>
            </section>

            <div className="add-cart d-flex ">
              <div className="input d-flex align-items-center justify-content-around py-2 px-2">
                <button className="d-flex justify-content-center align-items-center" onClick={() => { if(quantity > 0){ decrement()}}}>
                  <Minus />
                </button>
                <input readOnly type="text" id="quantity" value={quantity} />
                <button className="d-flex justify-content-center align-items-center" onClick={() => { increment() }}>
                  <Plus />
                </button>
                
              </div>
              <button className="cart-btn px-3 py-3 d-flex align-items-center justify-content-center" 
                onClick={() => {
                  setCartQuantity(cartQuantity + quantity)
                  setQuantity(0)
                  }
                  }> 
                <Cart className="cart-btn-icon" /> Add to cart
              </button>
              </div>
            </div>
          </div>
          
          
        </div>
      
    </div>
  );
}

export default App;
