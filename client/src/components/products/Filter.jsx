import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '../../styles/universal/Container.styled';
import {
  Wrapper,
  Title,
  FilterContainer,
  FilterItem,
  FilterName,
  Select,
  Option,
} from '../../styles/products/Filter.styled';

const Filter = () => {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState('Newest');

  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      [e.target.name]: value,
    });
  };
  console.log(filter);

  return (
    <Container>
      <Wrapper>
        <Title>Chair</Title>
        <FilterContainer>
          <FilterItem>
            <FilterName>Filter:</FilterName>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option value={'white'}>White</Option>
              <Option value={'black'}>Black</Option>
              <Option value={'red'}>Red</Option>
              <Option value={'blue'}>Blue</Option>
              <Option value={'green'}>Green</Option>
              <Option value={'yellow'}>Yellow</Option>
            </Select>
          </FilterItem>
          <FilterItem>
            <FilterName>Sort:</FilterName>
            <Select>
              <Option value={"newest"}>Newest</Option>
              <Option value={"asc"}>Price (asc)</Option>
              <Option value={'desc'}>Price (desc)</Option>
            </Select>
          </FilterItem>
        </FilterContainer>
      </Wrapper>
    </Container>
  );
};

export default Filter;
