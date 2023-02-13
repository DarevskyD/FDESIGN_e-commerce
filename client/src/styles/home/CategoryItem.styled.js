import styled from 'styled-components';
import { device } from '../BreakPoints';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease;
`;

export const ItemContainer = styled.div`
  flex: 1;
  min-width: 280px;
  height: 70vh;
  margin: 5px;
  position: relative;
  overflow: hidden;
  &:hover ${Image} {
    transform: scale(1.1);
  }
  @media only screen and (${device.lg}) {
    height: 50vh;
  }
  @media only screen and (${device.md}) {
    height: 50vh;
  }
  @media only screen and (${device.sm}) {
    height: 40vh;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 600;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  opacity: 0.8;
`;
