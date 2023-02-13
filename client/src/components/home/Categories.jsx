import CategoryItem from './CategoryItem';
import { Container } from '../../styles/universal/Container.styled';
import { Wrapper } from '../../styles/home/Categories.styled';

import { categories } from '../../data';

const Categories = () => {
  return (
    <Container padding="30px 0">
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
