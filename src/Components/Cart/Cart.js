
import './Cart.css';
import { useContext } from 'react';
import CartContext from '../Store/cart-context.js';
import CartItem from './CartItem';
import Card from '../UI/Card.js';

const Cart = (props) => {

    const cartList = props.cartItems.map((cart) => (
      <CartItem
          key={cart.id}
          id={cart.id}
          name={cart.name}
          description={cart.description}
          price={cart.price}
          onClose={cart.onClose}
      />
  ))

  return(
      <section>
          <Card>
              <ul>
                  {cartList}
              </ul>
          </Card>
      </section>
  )
}
export default Cart;