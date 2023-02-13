import styled from 'styled-components';
import { device } from '../BreakPoints';

export const OverlayWrapper = styled.div`
  width: 0px;
  height: 0px;
  opacity: 0;
  @media only screen and (${device.md}) {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ openSitebar }) => (openSitebar ? '100vw' : '0px')};
    height: ${({ openSitebar }) => (openSitebar ? '100vh' : '0px')};
    background-color: rgba(80, 80, 80, 0.4);
    opacity: 1;
    transition: all 0.5s;
    z-index: 9;
  }
`;

export const SitebarContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.16) 3px 0px 6px, rgba(0, 0, 0, 0.23) 3px 0px 6px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  transform: ${({ openSitebar }) => (openSitebar ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.5s ease-in-out;

  @media only screen and (${device.md}) {
    width: 50vw;
  }
  @media only screen and (${device.sm}) {
    width: 60vw;
  }
  @media only screen and (${device.xs}) {
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const MainMenu = styled.div`
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;
