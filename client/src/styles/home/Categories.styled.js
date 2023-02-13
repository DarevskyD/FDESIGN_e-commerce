import styled from "styled-components";
import { size, device } from "../BreakPoints";

export const Wrapper = styled.div`
  max-width: ${size.xl}px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (${device.md}) {
    padding: 0 10px;
  }
`;
