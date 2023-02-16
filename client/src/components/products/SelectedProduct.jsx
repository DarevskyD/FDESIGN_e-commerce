import { useState } from 'react';
import nextId from 'react-id-generator';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Container } from '../../styles/universal/Container.styled';
import { AddToCart } from '../../styles/universal/Button.styled';

import {
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  PriceContainer,
  PriceTitle,
  Price,
  FilterContainer,
  FilterTitle,
  FilterColorContainer,
  FilterColor,
  IconContainer,
  AmountBox,
  AmountContainer,
  QuantityContainer,
  QuantityTitle,
  ChangeQuantityBlock,
  Amount,
} from '../../styles/products/SelectedProduct.styled';

const SelectedProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (type) => {
    if (type === 'inc') {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <PriceContainer>
            <PriceTitle>Price:</PriceTitle>
            <Price>{product.price + ' $'}</Price>
          </PriceContainer>
          <FilterContainer>
            <FilterTitle>Color:</FilterTitle>
            <FilterColorContainer>
              {product.color?.map((item) =>
                item === 'all' ? null : (
                  <FilterColor color={item === 'wood' ? '#A47449' : item} key={nextId()} />
                ),
              )}
            </FilterColorContainer>
          </FilterContainer>
          <AmountContainer>
            <QuantityContainer>
              <QuantityTitle>Quantity:</QuantityTitle>
              <ChangeQuantityBlock>
                <IconContainer>
                  <RemoveIcon onClick={() => changeQuantity('dec')} />
                </IconContainer>
                <AmountBox>
                  <Amount>{quantity}</Amount>
                </AmountBox>
                <IconContainer>
                  <AddIcon onClick={() => changeQuantity('inc')} />
                </IconContainer>
              </ChangeQuantityBlock>
            </QuantityContainer>
          </AmountContainer>
          <AddToCart>ADD TO CART</AddToCart>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SelectedProduct;
