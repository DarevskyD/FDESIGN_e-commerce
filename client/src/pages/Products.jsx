import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import Search from '../components/home/Search';
import Filter from '../components/products/Filter';
import ProductsList from '../components/home/ProductsList';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const Products = ({ toggle, toggleClick, handleClick }) => {
  return (
    <>
      <Announcement />
      <Header toggle={toggle} toggleClick={toggleClick} handleClick={(e) => handleClick(e)} />
      <main>
        <Search />
        <Filter />
        <ProductsList />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Products;
