import { css } from 'styled-components';
import { device } from './styles/BreakPoints';

export const desktop = (props) => {
  return css`
    @media only screen and (${device.xl}) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (${device.lg}) {
      ${props}
    }
  `;
};

export const tabletSm = (props) => {
  return css`
    @media only screen and (${device.md}) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (${device.sm}) {
      ${props}
    }
  `;
};

export const mobileSm = (props) => {
  return css`
    @media only screen and (${device.xs}) {
      ${props}
    }
  `;
};
