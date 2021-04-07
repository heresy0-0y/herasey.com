import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Wrap = styled.div`
  color: #bbdbb4;
  background-image: radial-gradient(
    100rem at top left,
    hsla(249, 65%, 35%, 1),
    hsla(248, 52%, 39%, 1),
    hsla(189, 21%, 58%, 1)
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
