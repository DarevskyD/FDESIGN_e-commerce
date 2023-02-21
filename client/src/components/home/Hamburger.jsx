import { useDispatch, useSelector } from 'react-redux';
import { toggleClick } from '../../redux/slices/toggleSlice';

import {
  HamburgerMenu,
  HamburgerMenuLines,
  TopLine,
  CenterLine,
  BottomLine,
} from '../../styles/home/Hamburger.styled';

const Hamburger = ({ scrolled }) => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.active);

  const moveHamburgerMenu = () => {
    dispatch(toggleClick());
  };

  return (
    <>
      <HamburgerMenu scrolled={scrolled} onClick={moveHamburgerMenu}>
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
