import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Wrap = styled.div`
  color: #bbdbb4;
  background-image: linear-gradient(
    hsla(249, 65%, 35%, 1),
    hsla(248, 52%, 39%, 1),
    hsla(222, 39%, 42%, 1.00),
    hsla(168, 47%, 59%, 1)
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
