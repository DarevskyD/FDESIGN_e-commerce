import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import { Container } from '../../styles/universal/Container.styled';
import { Wrapper, Message } from '../../styles/home/ProductsList.styled';

const ProductsList = ({ categ, filters, sorts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categ
            ? `http://localhost:5000/api/products?category=${categ}`
            : 'http://localhost:5000/api/products',
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [categ]);

  useEffect(() => {
    categ &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key].includes(value)),
        ),
      );
  }, [products, categ, filters]);

  useEffect(() => {
    if (sorts === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sorts === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sorts]);

  return (
    <Container padding={'0 0 30px'}>
      <Wrapper>
        {categ && filteredProducts.length ? (
          filteredProducts.map((product) => <ProductItem key={product._id} product={product} />)
        ) : !categ ? (
          products.slice(0,8).map((product) => <ProductItem key={product._id} product={product} />)
        ) : (
          <Message>Unfortunately, we have not found any suitable products.</Message>
        )}
      </Wrapper>
    </Container>
  );
};

export default ProductsList;
