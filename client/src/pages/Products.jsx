import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import Search from '../components/home/Search';
import Filter from '../components/products/Filter';
import ProductsList from '../components/home/ProductsList';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const Products = ({ toggle, toggleClick, handleClick }) => {
  const [filters, setFilters] = useState({});
  const [sorts, setSorts] = useState('');

  const location = useLocation();
  const categ = location.pathname.split('/')[2];

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };  

  const handleSort = (e) => {
    const value = e.target.value;
    setSorts(value);
  };

  return (
    <>
      <Announcement />
      <Header toggle={toggle} toggleClick={toggleClick} handleClick={(e) => handleClick(e)} />
      <main>
        <Search />
        <Filter handleFilters={handleFilters} handleSort={handleSort} categ={categ} />
        <ProductsList categ={categ} filters={filters} sorts={sorts} />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Products;
