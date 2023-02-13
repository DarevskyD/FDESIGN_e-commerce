import styled from 'styled-components';
import { size, device } from '../BreakPoints';

export const Container = styled.div`
  width: 100%;
  padding: 10px 0 0 0;
  @media only screen and (${device.sm}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  height: 70vh;
  max-width: ${size.xl}px;
  height: calc(100vh - 70px);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media only screen and (${device.xl}) {
    max-width: ${size.lg}px;
  }
  @media only screen and (${device.lg}) {
    max-width: ${size.md}px;
    height: calc(80vh - 70px);
  }
  @media only screen and (${device.md}) {
    max-width: ${size.sm}px;
    height: calc(65vh - 70px);
  }
`;

export const Arrow = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 1;
  @media only screen and (${device.lg}) {
    width: 50px;
    height: 50px;
  }
`;

export const WrapperSlide = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -size.xl}px);
  transition: all 1.5s ease;

  @media only screen and (${device.xl}) {
    transform: translateX(${(props) => props.slideIndex * -size.lg}px);
  }
  @media only screen and (${device.lg}) {
    transform: translateX(${(props) => props.slideIndex * -size.md}px);
  }
  @media only screen and (${device.md}) {
    transform: translateX(${(props) => props.slideIndex * -size.sm}px);
  }
`;

export const Slide = styled.div`
  display: flex;
  min-width: 100%;
`;

export const ImgContainer = styled.div`
  flex: 2;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
`;

export const InfoWrapper = styled.div`
  width: 60%;
  @media only screen and (${device.lg}) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
  margin: 0 0 20px;
  @media only screen and (${device.lg}) {
    font-size: 50px;
  }
  @media only screen and (${device.md}) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin: 0 0 30px;
  letter-spacing: 2px;
`;
