import styled from 'styled-components';
import { device } from '../BreakPoints';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ bg }) => bg};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  z-index: ${({ zindex }) => zindex};
  @media only screen and (${device.md}) {
    padding: ${({ padding }) => padding === '30px 0' && '10px 0'};
  }
`;
