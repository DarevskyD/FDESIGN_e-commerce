//import { useState } from 'react';
import {
  HamburgerMenu,
  HamburgerMenuLines,
  TopLine,
  CenterLine,
  BottomLine,
} from '../../styles/home/Hamburger.styled';

const Hamburger = ({ toggle, scrolled, toggleClick }) => {  

  return (
    <>
      <HamburgerMenu scrolled={scrolled} onClick={() => toggleClick()}>
        <HamburgerMenuLines>
          <TopLine toggle={toggle} />
          <CenterLine toggle={toggle} />
          <BottomLine toggle={toggle} />
        </HamburgerMenuLines>
      </HamburgerMenu>
    </>
  );
};

export default Hamburger;
