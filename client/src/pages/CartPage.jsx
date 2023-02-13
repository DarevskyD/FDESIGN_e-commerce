import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import Cart from '../components/cart/Cart';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const CartPage = ({ toggle, toggleClick, handleClick }) => {
  return (
    <>
      <Announcement />
      <Header toggle={toggle} toggleClick={toggleClick} handleClick={(e) => handleClick(e)} />
      <main>
        <Cart />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
