import ProductItem from './ProductItem';
import { Container } from '../../styles/universal/Container.styled';
import { Wrapper } from '../../styles/home/ProductsList.styled';

import { products } from '../../data';

const ProductsList = () => {
  return (
    <Container padding={'0 0 30px'}>
      <Wrapper>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ProductsList;
