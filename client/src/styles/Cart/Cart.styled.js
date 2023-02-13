import styled from 'styled-components';
import { size, device } from '../BreakPoints';

export const Wrapper = styled.div`
  max-width: ${size.xl};
  margin: 0 auto;
  padding: 0 20px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;
  @media only screen and (${device.sm}) {
    flex-direction: column;
  }
`;

export const TopWrapper = styled.div`
  @media only screen and (${device.md}) {
    display: none;
  }
`;

export const ShoppingBag = styled.span`
  padding: 0 0 3px;
  margin: 0 20px 0 0;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const WishList = styled.span`
  padding: 0 0 3px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (${device.md}) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  @media only screen and (${device.sm}) {
    flex-direction: column;
  }
`;

export const Hr = styled.hr`
  background-color: ${({ theme }) => theme.colors.lightBg};
  border: none;
  height: 1px;
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  @media only screen and (${device.lg}) {
    flex: 4;
  }
  @media only screen and (${device.sm}) {
    margin: 0 0 15px;
  }
  @media only screen and (${device.xs}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (${device.xs}) {
    margin: 0 0 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Details = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (${device.sm}) {
    padding: 10px 10px 10px 20px;
  }
`;

export const ProductName = styled.span`
  margin: 0 0 15px;
  b {
    margin: 0 10px 0 0;
  }
`;

export const ProductId = styled.span`
  margin: 0 0 15px;
  b {
    margin: 0 10px 0 0;
  }
`;

export const ProductColor = styled.div`
  display: flex;
  align-items: center;
  b {
    margin: 0 10px 0 0;
  }
`;

export const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ color }) => color};
`;

export const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (${device.sm}) {
    flex-direction: row;
    justify-content: flex-end;
  }
  @media only screen and (${device.xs}) {
    justify-content: space-between;
  }
`;

export const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
  @media only screen and (${device.sm}) {
    margin: 0 30px 0 0;
  }
  @media only screen and (${device.xs}) {
    padding: 0 0 0 20px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-weight: 500;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export const Amount = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin: 0 10px;
`;

export const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const SummaryTitle = styled.h2`
  font-weight: 400;
  margin: 0 0 20px 0;
`;

export const SummaryItem = styled.div`
  margin: 0 0 15px;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ type }) => type === 'total' && '500'};
  font-size: ${({ type }) => type === 'total' && '24px'};
`;
export const SummaryItemText = styled.p``;
export const SummaryItemPrice = styled.span``;
