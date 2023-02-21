import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import { Container } from '../../styles/universal/Container.styled';
import { Wrapper, Message } from '../../styles/home/ProductsList.styled';
import { PrevButton, NextButton } from '../../styles/universal/Button.styled';

const ProductsList = ({ categ, filters, sorts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [counter, setCounter] = useState(6);

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

  console.log(products);

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

  const nextProducts = () => {
    if (counter < products.length) {
      setCounter(counter + 6);
      setDisablePrev(false);
    } else {
      setCounter(products.length);
      setDisableNext(true);
    }
  };

  const prevProducts = () => {
    if (counter >= products.length) {
      setCounter(counter - 6);
      setDisablePrev(true);
      setDisableNext(false);
    } else {
      setDisableNext(false);
    }
  };

  return (
    <Container padding={'0 0 30px'}>
      <Wrapper>
        {categ && filteredProducts.length ? (
          filteredProducts.map((product) => <ProductItem key={product._id} product={product} />)
        ) : !categ ? (
          products
            .slice(0, counter)
            .map((product) => <ProductItem key={product._id} product={product} />)
        ) : (
          <Message>Unfortunately, we have not found any suitable products.</Message>
        )}
      </Wrapper>
      <Wrapper>
        <PrevButton disabled={disablePrev} onClick={prevProducts}>
          PREV
        </PrevButton>
        <NextButton disabled={disableNext} onClick={nextProducts}>
          NEXT
        </NextButton>
      </Wrapper>
    </Container>
  );
};

export default ProductsList;
