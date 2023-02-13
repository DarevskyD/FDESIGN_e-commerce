import { useState, useEffect } from 'react';
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
          <Logo>F_DESIGN</Logo>
        </LeftNav>
        <MainNav toggle={toggle} onClick={(e) => handleClick(e)}>
          <MenuItemWrapper>
            <MenuItem href="#">HOME</MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem href="#">SHOP</MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem href="#">MAGAZINE</MenuItem>
          </MenuItemWrapper>
        </MainNav>
        <RightNav>
          <Language toggle={toggle}>EN</Language>
          <Registration toggle={toggle}>
            <RegistrationItem>LOGIN</RegistrationItem>
            <RegistrationItem>SIGN IN</RegistrationItem>
          </Registration>
          <Cart>
            <Badge
              badgeContent={1}
              sx={{
                '& .MuiBadge-badge': {
                  color: theme.colors.light,
                  backgroundColor: theme.colors.additionalMd,
                },
              }}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Cart>
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default Header;
