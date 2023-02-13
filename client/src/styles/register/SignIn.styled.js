import styled from 'styled-components';
import { size } from '../BreakPoints';

export const Wrapper = styled.div`
  max-width: ${size.xl}px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Title = styled.h2`
  font-size: 30px;
  margin: 0 0 10px;
  font-weight: 300;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`  
  margin: 0 0 10px;
  padding: 10px;
  outline: none;
  &:nth-child(2) {
    margin: 0 0 20px;
  }
  border: 1px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.additional};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.additional};
  }
  transition: all 0.5s ease;
`;

export const Link = styled.a`
  margin: 0 0 5px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
