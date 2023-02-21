import { useState, useEffect } from 'react';
import axios from 'axios';

import CategoryItem from './CategoryItem';
import { Container } from '../../styles/universal/Container.styled';
import { Wrapper } from '../../styles/home/Categories.styled';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/categories');
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  return (
    <Container padding="30px 0">
      <Wrapper>
        {categories.slice(0, 3).map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
