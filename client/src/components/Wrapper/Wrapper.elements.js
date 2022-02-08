import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Wrap = styled(Container)`
  color: #bbdbb4;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  ${Container}
`;

export const WrapContainer = styled(Container)`
  background-image: linear-gradient(
    hsla(249, 65%, 35%, 1),
    hsla(248, 52%, 39%, 1),
    hsla(222, 39%, 42%, 1.00),
    hsla(168, 47%, 59%, 1)
    );
  overflow-x: hidden;
  left: auto;
  right: auto;
  flex-direction: column;
  max-width: 100vw;
  ${Container};
`;
