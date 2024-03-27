
import './App.css';
import NewShoeInput from './Components/Shoes/NewShoeInput';
import { useState } from 'react';
import ShoesList from './Components/ShoesList/ShoesList';
import CartButton from './Components/Cart/CartButton';
import CartProvider from './Components/Store/CartProvider';
import Cart from './Components/Cart/Cart';

const DUMMY_SHOES = [
  {
    id: 'm1',
    name: 'Nike',
    description: 'Leather',
    price: 2299,
    l : 2,
    m: 3,
    s: 3
  },
  {
    id: 'm2',
    name: 'HRX',
    description: 'Running shoe',
    price: 2199,
    l : 2,
    m: 1,
    s: 1
  },
];

const DUMMY_CART = [];

function App() {
  const [shoes, setShoes] = useState(DUMMY_SHOES);
  const [cart, setCart] = useState(DUMMY_CART);
  const [ cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  const addShoeHandler =(shoe) =>{
    setShoes((prevShoe) => {
      return [...prevShoe, shoe];
    })
  }
  const addCartHandler =(cart) =>{
    setCart((prevCart) => {
      return [...prevCart, cart];
    })
  }
  
  return (
    <CartProvider>
      <div className="App">
        <div className='top'>
          <div className='topinput'>
            <NewShoeInput onAddShoes={addShoeHandler} />
          </div>
          <div className='cart-btn'>
            <CartButton onShow={showCartHandler} cartCount={cart.length} />
          </div>
        </div>
        <div>
          <ShoesList items={shoes} onAddToCart={addCartHandler} />
        </div>
        <div>
          {cartIsShown && <Cart onClose={hideCartHandler} cartItems={cart} />}
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
