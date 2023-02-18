import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/cartSlice';

const SelectedProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const changeQuantity = (type) => {
    if (type === 'inc') {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleToCart = () => {
    dispatch(addProduct({ ...product, quantity }));
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
                  <FilterColor color={item === 'wood' ? '#A47449' : item} key={uuidv4()} />
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
          <AddToCart onClick={handleToCart}>ADD TO CART</AddToCart>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SelectedProduct;
