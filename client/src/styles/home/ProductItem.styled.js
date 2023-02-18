import styled from 'styled-components';
import { device } from '../BreakPoints';

export const Info = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secOverlay};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.5s ease;
  @media only screen and (${device.md}) {
    opacity: 1;
  }
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    transform: scale(1.1);
  }  
`;
