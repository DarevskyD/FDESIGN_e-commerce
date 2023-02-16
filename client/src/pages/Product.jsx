import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import SelectedProduct from '../components/products/SelectedProduct';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';
import { useEffect } from 'react';
import { publicRequest } from '../request';

const Product = ({ toggle, toggleClick, handleClick }) => {
  const [product, setProduct] = useState({});

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  return (
    <>
      <Announcement />
      <Header toggle={toggle} toggleClick={toggleClick} handleClick={(e) => handleClick(e)} />
      <SelectedProduct product={product} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
