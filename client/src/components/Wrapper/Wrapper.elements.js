import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Wrap = styled.div`
  color: #bbdbb4;
  background-image: radial-gradient(
    ellipse at top left,
    #3b352b,
    #1f338c,
    #1f338c,
    #538082,
    #1f338c
    );
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
