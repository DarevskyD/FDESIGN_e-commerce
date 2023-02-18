import styled from 'styled-components';
import { size, device } from '../BreakPoints';

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.middleBg};
`;

export const Wrapper = styled.div`
  max-width: ${size.xl}px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  @media only screen and (${device.md}) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 2;
  padding: 0 50px 0 0;
  @media only screen and (${device.md}) {
    padding: 0px 20px;
    margin: 0 0 20px;
  }
  @media only screen and (${device.xs}) {
    padding: 0px;
  }
`;

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 5px;
  margin: 0 0 20px;
  @media only screen and (${device.md}) {
    margin: 0 0 10px;
  }
`;

export const Description = styled.p`
  margin: 0 0 20px;
  line-height: 1.2;
`;

export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;  
  background-color: #${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
  svg {
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const Right = styled.div`
  flex: 3;
  display: flex;
  padding: 0 20px;
  @media only screen and (${device.md}) {
    padding: 0px;
  }
  @media only screen and (${device.xs}) {
    flex-direction: column;
  }
`;

export const RightAbout = styled.div`
  flex: 1;
  padding: 0 20px;
  @media only screen and (${device.xs}) {
    margin: 0 0 20px;
    padding: 0px;
  }
`;

export const Title = styled.h3`
  margin: 0 0 20px;
  @media only screen and (${device.xs}) {
    margin: 0 0 10px;
  }
`;

export const AboutUs = styled.ul``;

export const AboutUsItem = styled.li`
  padding: 0 0 10px;
`;

export const AboutUsLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RightHelp = styled.div`
  flex: 1;
  padding: 0 20px;
  @media only screen and (${device.xs}) {
    margin: 0 0 20px;
    padding: 0px;
  }
`;

export const HelpTitle = styled.h3`
  margin: 0 0 20px;
  @media only screen and (${device.xs}) {
    margin: 0 0 10px;
  }
`;

export const Help = styled.ul``;

export const HelpItem = styled.li`
  padding: 0 0 10px;
`;

export const HelpLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RightContact = styled.div`
  flex: 1;
  padding: 0 20px;
  @media only screen and (${device.xs}) {    
    padding: 0px;
  }
`;

export const Contact = styled.ul``;

export const ContactTitle = styled.h3`
  margin: 0 0 20px;
  @media only screen and (${device.xs}) {
    margin: 0 0 10px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 0 10px;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0 10px;
`;
