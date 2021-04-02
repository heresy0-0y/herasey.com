import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Wrap = styled.div`
  color: papayawhip;
  background-color: #00642d;
  display: flex;
  height: 100vh;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

export const WrapContainer = styled(Container)`
  display: flex;
  left: auto;
  right: auto;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  ${Container};
`;
