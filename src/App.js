
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


import Nav from './components/Nav';
import LightBox from './components/LightBox';
import SideNav from './components/SideNav';
import minus from './images/icon-minus.svg';
import plus from './images/icon-plus.svg';
import Cart from './images/icon-cart.svg';

function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid p-0">
        
        { isVisible ? <SideNav toggleVisible={setIsVisible}/> : ''}
        
        <Nav toggleVisible={setIsVisible} />
        <LightBox/>
        <section className="product-description p-4">
          <h1>Sneaker Company</h1>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        
        <div className="price d-flex flex-nowrap justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <p id="price-actual">$125.00</p>
            <p id="discount" className="px-2">50%</p>
          </div>
          <div>
          <p id="price-msrp">250.00%</p>
          </div>
          
        </div>
        </section>

        <div className="add-cart d-flex flex-column px-4 justify-content-center">
          <div className="input d-flex align-items-center justify-content-around py-2">
            <img src={minus} alt="minus" onClick={() => { if(quantity > 0){ setQuantity(quantity - 1)}}}/>
            <input readOnly type="text" min="0" id="quantity" value={quantity} />
            <img src={plus} alt="minus" onClick={() => { setQuantity(quantity + 1) }}/>
          </div>
          <button className="cart-btn px-3 py-3"> <img src={Cart}  alt="cart" /> Add to cart</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
