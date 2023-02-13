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
  return (
    <Container>
      <Wrapper>
        <Title>Chair</Title>
        <FilterContainer>
          <FilterItem>
            <FilterName>Filter:</FilterName>
            <Select defaultValue={'default'}>
              <Option disabled value={'default'}>
                Color
              </Option>
              <Option value={1}>White</Option>
              <Option value={2}>Black</Option>
              <Option value={3}>Red</Option>
              <Option value={4}>Blue</Option>
              <Option value={5}>Green</Option>
              <Option value={6}>Yellow</Option>
            </Select>
          </FilterItem>
          <FilterItem>
            <FilterName>Sort:</FilterName>
            <Select defaultValue={'default'}>
              <Option disabled value={'default'}>
                Newest
              </Option>
              <Option value={1}>Price (asc)</Option>
              <Option value={2}>Price (desc)</Option>
            </Select>
          </FilterItem>
        </FilterContainer>
      </Wrapper>
    </Container>
  );
};

export default Filter;
