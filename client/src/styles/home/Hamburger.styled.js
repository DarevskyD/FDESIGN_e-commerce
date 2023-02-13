import styled from 'styled-components';
import { device } from '../BreakPoints';

export const TopLine = styled.span`
  width: ${({ toggle }) => (toggle ? '35px' : '25px')};
  height: ${({ toggle }) => (toggle ? '3px' : '5px')};
  transform: ${({ toggle }) => (toggle ? 'rotate(45deg) translate(3px, 11px)' : 'rotate(0)')};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s ease;
`;

export const CenterLine = styled.span`
  width: ${({ toggle }) => (toggle ? '35px' : '25px')};
  height: ${({ toggle }) => (toggle ? '3px' : '5px')};
  transform: ${({ toggle }) => (toggle ? 'rotate(-45deg) translate(-4px, -4px)' : 'rotate(0)')};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s ease;
`;

export const BottomLine = styled.span`
  width: ${({ toggle }) => (toggle ? '35px' : '13px')};
  height: ${({ toggle }) => (toggle ? '3px' : '5px')};
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ toggle }) => (toggle ? '0' : '1')};
  transform: ${({ toggle }) => (toggle ? 'translateX(20px)' : 'translateX(0px)')};
  transition: all 0.5s ease;
`;

export const HamburgerMenu = styled.div`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.light};  
  cursor: pointer;
  transition: all 0.5s ease;

  @media only screen and (${device.md}) {
    display: flex;
    margin: 0 20px 0 0;
    width: ${({ scrolled }) => scrolled && '70px'};
    height: ${({ scrolled }) => scrolled && '70px'};    
    transition: all 1s ease;
  }
`;

export const HamburgerMenuLines = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
