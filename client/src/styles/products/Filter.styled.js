import styled from 'styled-components';
import { size } from '../BreakPoints';

export const Wrapper = styled.div`
  max-width: ${size.xl}px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0 0 10px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px;
`;
export const FilterItem = styled.div``;

export const FilterName = styled.span`
  font-size: 20px;
  margin: 0 15px 0 0;
`;

export const Select = styled.select`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;

  &:focus {
    background-image: linear-gradient(45deg, gray 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, gray 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    outline: 0;
  }
`;

export const Option = styled.option`
  &:hover {
    background-color: red;
  }
`;
