import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { theme } from '../../styles/Theme';

import { Container } from '../../styles/universal/Container.styled';
import { TopButton, CheckoutButton } from '../../styles/universal/Button.styled';

import {
  Wrapper,
  CartContainer,
  Title,
  Top,
  TopWrapper,
  ShoppingBag,
  WishList,
  Bottom,
  Info,
  Product,
  Hr,
  ProductDetails,
  ImageContainer,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  Color,
  PriceDetails,
  ProductAmount,
  IconContainer,
  Amount,
  ProductPrice,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
} from '../../styles/Cart/Cart.styled';

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <CartContainer>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopWrapper>
              <ShoppingBag>Shopping Bag(0)</ShoppingBag>
              <WishList>Wishlist(0)</WishList>
            </TopWrapper>
            <TopButton color="primary">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                  <ImageContainer>
                    <Image src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </ImageContainer>
                  <Details>
                    <ProductName>
                      <b>Product:</b>CHAIR BLACK
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>9986049604
                    </ProductId>
                    <ProductColor>
                      <b>Color:</b>
                      <Color color={theme.colors.primary} />
                    </ProductColor>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmount>
                    <IconContainer>
                      <RemoveIcon />
                    </IconContainer>
                    <Amount>1</Amount>
                    <IconContainer>
                      <AddIcon />
                    </IconContainer>
                  </ProductAmount>
                  <ProductPrice>100$</ProductPrice>
                </PriceDetails>
              </Product>

              <Hr />

              <Product>
                <ProductDetails>
                  <ImageContainer>
                    <Image src="https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </ImageContainer>
                  <Details>
                    <ProductName>
                      <b>Product:</b>TABLE WHITE
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>8640864004
                    </ProductId>
                    <ProductColor>
                      <b>Color:</b>
                      <Color color={theme.colors.light} />
                    </ProductColor>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmount>
                    <IconContainer>
                      <RemoveIcon />
                    </IconContainer>
                    <Amount>1</Amount>
                    <IconContainer>
                      <AddIcon />
                    </IconContainer>
                  </ProductAmount>
                  <ProductPrice>80$</ProductPrice>
                </PriceDetails>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal:</SummaryItemText>
                <SummaryItemPrice>$ 180</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping:</SummaryItemText>
                <SummaryItemPrice>$ 10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount:</SummaryItemText>
                <SummaryItemPrice>-$ 10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total:</SummaryItemText>
                <SummaryItemPrice>$ 180</SummaryItemPrice>
              </SummaryItem>
              <CheckoutButton>CHECKOUT NOW</CheckoutButton>
            </Summary>
          </Bottom>
        </CartContainer>
      </Wrapper>
    </Container>
  );
};

export default Cart;
