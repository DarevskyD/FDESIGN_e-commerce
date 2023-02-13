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
  FilterColorBox,
  FilterColor,
  IconContainer,
  AmountContainer,
  QuantityContainer,
  QuantityTitle,
  ChangeQuantityBlock,
  Amount,
} from '../../styles/products/SelectedProduct.styled';

const SelectedProduct = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ImageContainer>
        <InfoContainer>
          <Title>Black BURBANK</Title>
          <Description>
            Make a statement with minimalism with these durable and sleek wooden chairs. Made from
            durable solid wood and painted black, the chairs have a lacquered, glossy finish. The
            wide seat is complemented by a slanted, slatted backrest adding a twist to this classic
            design to create a Scandi-inspired look. Pair them with a table in the dining room, or
            enjoy them on their own in the kitchen or living room.
          </Description>
          <PriceContainer>
            <PriceTitle>Price:</PriceTitle>
            <Price>120$</Price>
          </PriceContainer>
          <FilterContainer>
            <FilterTitle>Color:</FilterTitle>
            <FilterColorContainer>
              <FilterColorBox>
                <FilterColor color="black"></FilterColor>
              </FilterColorBox>
              <FilterColorBox>
                <FilterColor color="red"></FilterColor>
              </FilterColorBox>
              <FilterColorBox>
                <FilterColor color="yellow"></FilterColor>
              </FilterColorBox>
            </FilterColorContainer>
          </FilterContainer>
          <AmountContainer>
            <QuantityContainer>
              <QuantityTitle>Quantity:</QuantityTitle>
              <ChangeQuantityBlock>
                <IconContainer>
                  <RemoveIcon />
                </IconContainer>
                <Amount>1</Amount>
                <IconContainer>
                  <AddIcon />
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
