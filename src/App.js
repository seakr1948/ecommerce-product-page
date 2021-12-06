
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';


function App() {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <div className="container p-0">
        <Nav />
        {/* <LightBox/>
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
        </section> */}
        
      </div>
      
    </div>
  );
}

export default App;
