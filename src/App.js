import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      'https://react-http-d6045-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
      {
        /**
         * La differnece entre POST et PUT est que PUT MAJ s'il existe et POST cree
         * meme s'il existe
         */
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);
  
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
