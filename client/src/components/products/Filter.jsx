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

const Filter = ({ handleFilters, handleSort, categ }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{categ}</Title>
        <FilterContainer>
          <FilterItem>
            <FilterName>Filter:</FilterName>
            <Select name="color" onChange={handleFilters}>
              <Option value="">Color</Option>
              <Option value="all">All</Option>
              <Option value="white">White</Option>
              <Option value="black">Black</Option>
              <Option value="red">Red</Option>
              <Option value="blue">Blue</Option>
              <Option value="green">Green</Option>
              <Option value="yellow">Yellow</Option>
              <Option value="wood">Wood</Option>
            </Select>
          </FilterItem>
          <FilterItem>
            <FilterName>Sort:</FilterName>
            <Select name="sorts" onChange={handleSort}>
              <Option value="">Price</Option>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </FilterItem>
        </FilterContainer>
      </Wrapper>
    </Container>
  );
};

export default Filter;
