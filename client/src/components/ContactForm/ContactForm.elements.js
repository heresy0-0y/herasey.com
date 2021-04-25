import styled from "styled-components";
import { Container, Button } from "../../globalStyles";

export const Form = styled.form`
  color: #bbdbb4;
  background-image: linear-gradient(
    hsla(249, 65%, 35%, 1),
    hsla(248, 52%, 39%, 1),
    hsla(222, 39%, 42%, 1.00));
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

export const FormContainer = styled(Container)`
  display: flex;
  left: auto;
  right: auto;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  ${Container};
`;


export const TextInput = styled.input`
    color: #bbdbb4;
    height: 10%;
    background-color: hsla(248, 52%, 39%, 1);
`;

export const MessageArea = styled.textarea`
    color: #bbdbb4;
    background-color: hsla(248, 52%, 39%, 1);
`;

export const Label = styled.label`
  color: #bbdbb4;
`

export const SendInput = styled.input`
  color: #bbdbb4;
  background-color: hsla(249, 65%, 35%, 1);

  &:click { 
    background-color: hsla(222, 39%, 42%, 1.00);
  }
`