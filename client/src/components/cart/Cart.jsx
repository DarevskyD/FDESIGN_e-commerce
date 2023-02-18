import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

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
  const cart = useSelector((state) => state.cart);

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
              {cart.products.map((product) => (
                <React.Fragment key={product._id}>
                  <Product>
                    <ProductDetails>
                      <ImageContainer>
                        <Image src={product.img} />
                      </ImageContainer>
                      <Details>
                        <ProductName>
                          <b>Product:</b>
                          {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b>
                          {product._id}
                        </ProductId>
                        <ProductColor>
                          <b>Color:</b>
                          {product.color?.map((item) =>
                            item === 'all' ? null : (
                              <Color color={item === 'wood' ? '#A47449' : item} key={uuidv4()} />
                            ),
                          )}
                        </ProductColor>
                      </Details>
                    </ProductDetails>
                    <PriceDetails>
                      <ProductAmount>
                        <IconContainer>
                          <RemoveIcon />
                        </IconContainer>
                        <Amount>{product.quantity}</Amount>
                        <IconContainer>
                          <AddIcon />
                        </IconContainer>
                      </ProductAmount>
                      <ProductPrice>{product.price * product.quantity}$</ProductPrice>
                    </PriceDetails>
                  </Product>
                  <Hr />
                </React.Fragment>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal:</SummaryItemText>
                <SummaryItemPrice>{cart.total} $</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping:</SummaryItemText>
                <SummaryItemPrice>10 $</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount:</SummaryItemText>
                <SummaryItemPrice>{cart.total > 100 ? '-10 $' : '0 $'}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total:</SummaryItemText>
                <SummaryItemPrice>
                  {cart.total > 100 || cart.total === 0 ? cart.total : cart.total + 10} $
                </SummaryItemPrice>
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
