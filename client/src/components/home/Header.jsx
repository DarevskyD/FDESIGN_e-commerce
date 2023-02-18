import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { theme } from '../../styles/Theme';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Hamburger from './Hamburger';
import Sitebar from './Sitebar';

import {
  Container,
  Wrapper,
  LeftNav,
  Logo,
  MainNav,
  MenuItemWrapper,
  MenuItem,
  RightNav,
  Language,
  Registration,
  RegistrationItem,
  Cart,
} from '../../styles/home/Header.styled';

const Header = ({ toggle, toggleClick, handleClick }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 36) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Sitebar toggle={toggle} />
      <Wrapper scrolled={scrolled}>
        <LeftNav>
          <Hamburger toggle={toggle} scrolled={scrolled} toggleClick={toggleClick} />
          <Link to="/">
            <Logo>F_DESIGN</Logo>
          </Link>
        </LeftNav>
        <MainNav toggle={toggle} onClick={(e) => handleClick(e)}>
          <MenuItemWrapper>
            <Link to="/">
              <MenuItem>HOME</MenuItem>
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Link to="/products/category">
              <MenuItem>CATEGORY</MenuItem>
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem href="#">MAGAZINE</MenuItem>
          </MenuItemWrapper>
        </MainNav>
        <RightNav>
          <Language toggle={toggle}>EN</Language>
          <Registration toggle={toggle}>
            <Link to="/login">
              <RegistrationItem>LOGIN</RegistrationItem>
            </Link>
            <Link to="/register">
              <RegistrationItem>SIGN IN</RegistrationItem>
            </Link>
          </Registration>
          <Link to="/cart">
            <Cart>
              <Badge
                badgeContent={quantity}
                sx={{
                  '& .MuiBadge-badge': {
                    color: theme.colors.light,
                    backgroundColor: theme.colors.additionalMd,
                  },
                }}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Cart>
          </Link>
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default Header;
