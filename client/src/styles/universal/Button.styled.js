import styled from 'styled-components';
import { theme } from '../Theme';
import { device } from '../BreakPoints';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const InfoButton = styled(Button)`
  font-size: 30px;
  @media only screen and (${device.lg}) {
    font-size: 20px;
  }
`;

export const AddToCart = styled(Button)`
  margin-top: auto;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.5s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.additionalMd};
    background-color: ${({ theme }) => theme.colors.additionalMd};
  }
`;

export const CreateButton = styled(Button)`
  margin: 0 auto 15px;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.additionalMd};
  background-color: ${({ theme }) => theme.colors.additionalMd};
`;

export const SignButton = styled(Button)`
  margin: 0 auto 15px;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.additionalMd};
  background-color: ${({ theme }) => theme.colors.additionalMd};
`;

export const TopButton = styled(Button)`
  color: ${({ color }) => (color === 'primary' ? theme.colors.light : theme.colors.primary)};
  border: 1px solid;
  background-color: ${({ color }) =>
    color === 'primary' ? theme.colors.primary : theme.colors.light};
  ${({ color }) => (color === 'primary' ? theme.colors.primary : theme.colors.primary)};
  @media only screen and (${device.sm}) {
    margin: 0 0 10px;
    width: 250px;
  }
`;

export const CheckoutButton = styled(Button)`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.additionalMd};
  background-color: ${({ theme }) => theme.colors.additionalMd};
`;

export const NextButton = styled(Button)`
  margin: 10px 5px 0 5px;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid
    ${({ disabled }) => (disabled ? theme.colors.middleBg : theme.colors.additionalMd)};
  background-color: ${({ disabled }) =>
    disabled ? theme.colors.middleBg : theme.colors.additionalMd};
`;

export const PrevButton = styled(Button)`
  margin: 10px 5px 0 5px;
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid
    ${({ disabled }) => (disabled ? theme.colors.middleBg : theme.colors.additionalMd)};
  background-color: ${({ disabled }) =>
    disabled ? theme.colors.middleBg : theme.colors.additionalMd};
`;
