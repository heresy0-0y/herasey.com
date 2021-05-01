import styled from "styled-components";
import { Container, Button } from "../../globalStyles";

export const Form = styled.form`
  color: #bbdbb4;
  display: flex;
  background-image: linear-gradient(
    hsla(249, 65%, 35%, 1),
    hsla(248, 52%, 39%, 1),
    hsla(222, 39%, 42%, 1.00));
  font-family: 'Montserrat', sans-serif;
  width: 70%;
  flex-direction: column;
  & > * { 
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    margin: .6rem;
    box-shadow:1em 2em 2.6em -2.6em hsla(189, 21%, 58%, 1);
    background-color: rgba(255, 255, 255, 0);

    &:focus { 
      border: 2px solid hsla(28, 78%, 77%, 1);
      transition: all 0.3s ease;
    }
  };
`;

export const FormContainer = styled(Container)`
  justify-content: center;
  margin: .5rem;
  padding: .5rem;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
  width: 84%;
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
    font-weight: normal;
    font-family: 'Montserrat', sans-serif;
    height: 30%;
    resize: none;
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