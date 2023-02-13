import styled from 'styled-components';
import { size, device } from '../BreakPoints';

export const Wrapper = styled.div`
  max-width: ${size.xl}px;  
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.light};
  @media only screen and (${device.lg}) {
    width: 60%;
  }
  @media only screen and (${device.md}) {
    width: 70%;
  }
  @media only screen and (${device.sm}) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin: 0 0 20px;
  font-weight: 300;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  outline: none;
  &:nth-child(even) {
    margin: 20px 0 0 0;
  }
  border: 1px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.additional};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.additional};
  }
  transition: all 0.5s ease;
  @media only screen and (${device.xs}) {
    min-width: 100%;
    margin: 0 0 10px;
    &:nth-child(even) {
      margin: 0 0 10px;
    }
  }
`;

export const Agreement = styled.p`
  margin: 20px 0;
  @media only screen and (${device.xs}) {
    margin: 10px 0;
  }
`;
