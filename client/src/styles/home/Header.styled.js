import styled from 'styled-components';
import { size, device } from '../BreakPoints';
import { theme } from '../Theme';

export const Container = styled.header`
  position: relative;
  width: 100%;
  background-color: ${({ scrolled }) => (scrolled ? theme.colors.lightBg : theme.colors.light)};
  position: ${({ scrolled }) => (scrolled ? 'sticky' : null)};
  box-shadow: ${({ scrolled }) =>
    scrolled ? 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' : 'none'};
  top: 0;
  z-index: 2;
  transition: all 1s ease;
  @media only screen and (${device.md}) {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const Wrapper = styled.div`
  max-width: ${size.xl}px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 10;
  @media only screen and (${device.md}) {
    background-color: ${({ scrolled }) => (scrolled ? theme.colors.lightBg : theme.colors.light)};
    padding: 0 20px 0 0;
  }
`;

export const LeftNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 5px;
  padding: 0 15px 0 0;
`;

export const MainNav = styled.nav`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (${device.md}) {
    opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    transition: ${({ toggle }) => (toggle ? 'opacity 2s ease' : 'none')};
    display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
    height: auto;
    position: absolute;
    top: 100px;
    left: 30px;
    flex-direction: column;
  }
`;

export const MenuItemWrapper = styled.span`
  display: flex;
  position: relative;
  margin: 0 30px 0 0;
  @media only screen and (${device.md}) {
    width: 100%;
    font-size: 24px;
    font-weight: 300;
    margin: 0 0 30px;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s;
  }
  &:hover {
    &:after {
      width: 100%;
      height: 1px;
      bottom: -3px;
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }

  @media only screen and (${device.md}) {
    color: ${({ theme }) => theme.colors.light};
    padding: 0 0 0 10px;
    &:after {
      top: 0;
      background-color: ${({ theme }) => theme.colors.light};
      transform: scaleY(0);
      transform-origin: left bottom;
    }
    &:hover {
      &:after {
        width: 1px;
        height: 100%;
        transform-origin: left top;
        transform: scaleY(1);
      }
    }
  }
`;

export const RightNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (${device.md}) {
    justify-content: flex-end;
  }
`;

export const Language = styled.div`
  display: flex;
  margin: 0 20px 0 0;
  cursor: pointer;
  @media only screen and (${device.sm}) {
    opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    transition: ${({ toggle }) => (toggle ? 'opacity 2s ease' : 'none')};
    display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
    position: absolute;
    top: 365px;
    left: 30px;
    color: ${({ theme }) => theme.colors.light};
    font-size: 24px;
    font-weight: 300;
    padding: 0 0 0 10px;
  }
`;

export const Registration = styled.div`
  display: flex;
  @media only screen and (${device.md}) {
    margin: 0 20px 0 0;
  }
  @media only screen and (${device.sm}) {
    opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    transition: ${({ toggle }) => (toggle ? 'opacity 2s ease' : 'none')};
    display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
    position: absolute;
    top: 260px;
    left: 30px;
    flex-direction: column;
    margin: 0px;
  }
`;

export const RegistrationItem = styled.div`
  font-weight: 600;
  margin-right: 20px;
  &:nth-child(2) {
    margin-right: 0;
  }
  cursor: pointer;
  @media only screen and (${device.md}) {
    margin-right: 10px;
  }
  @media only screen and (${device.sm}) {
    color: ${({ theme }) => theme.colors.light};
    font-size: 24px;
    font-weight: 300;
    margin: 0 0 30px;
    padding: 0 0 0 10px;
  }
`;

export const Cart = styled.div`
  cursor: pointer;
`;
