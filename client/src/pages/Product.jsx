import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import SelectedProduct from '../components/products/SelectedProduct';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const Product = ({toggle, toggleClick, handleClick}) => {
  return (
    <>
      <Announcement />
      <Header toggle={toggle} toggleClick={toggleClick} handleClick={(e) => handleClick(e)} />
      <SelectedProduct/>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
