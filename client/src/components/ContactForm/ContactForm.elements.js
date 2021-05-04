import styled from "styled-components";
import { Container} from "../../globalStyles";

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
  z-index: 1;
  & > * { 
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    margin: .6rem;
    box-shadow:1em 2em 2.6em -2.6em hsla(189, 21%, 58%, 1);
    background-color: rgba(255, 255, 255, 0);
   ;
    &:focus { 
      border: 2px solid hsla(28, 78%, 77%, 1);
      transition: all 0.3s ease;
    }
  };
`;

export const Modal = styled(Container)`
  position: absolute;
  margin: 8rem;
  margin-top: 4rem;
  left: auto;
  right: auto;
  transition: all 0.3s ease;
  height: ${ props => props.messageSent ? "50%" : "0px" };
  opacity: ${ props => props.messageSent ? "97%" : "0%" };
  z-index: 2;
  text-align: center;
  justify-content: center;
  border-radius: 2rem;
  background-color: ${ props => props.messageSent ? "rgba(60, 66, 152, 1.00)" : "rgba(0,0,0,0)" };
  width: 84%;
  z-index: ${ props => props.messageSent ? "2" : "-1"};
  ${Container};
`;

export const ModalText = styled.p`
  margin-bottom: auto;
  margin-top: 3em;
  line-height: 5rem;
  font-size: 3rem;

`;

export const FormContainer = styled(Container)`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  width: 84%;
  position: relative;
  height: 50%;
  margin: 4rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: 0;
  ${Container};
`;


export const TextInput = styled.input`
  color: #bbdbb4;
  height: 10%;
  background-color: hsla(248, 52%, 39%, 1);
  
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
  -webkit-text-fill-color: #bbdbb4;
  -webkit-transition-delay: 9999s;
  transition-delay: 9999s;
};
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