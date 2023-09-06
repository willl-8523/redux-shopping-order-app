import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((mapItem) => (
          <CartItem
            key={mapItem.id}
            item={{
              id: mapItem.id,
              title: mapItem.name,
              quantity: mapItem.quantity,
              total: mapItem.totalPrice,
              price: mapItem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
