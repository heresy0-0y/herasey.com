import styled from "styled-components";
import {Link} from "react-router-dom";
import {Carousel, Layer, Button as GButton} from 'grommet';
import { Container, Button} from "../../globalStyles";

export const Sitesplay = styled(Carousel)`

`;

export const Sitesplaytainer = styled(Container)`
    height: 70vh;
    margin: 1rem;
    width: 75vw;
   margin-left: auto;
   margin-right: auto;
    ${Container}
`;

export const Overlay = styled(Layer)`
 color: #bbdbb4;
 text-decoration: none;
 background-image: linear-gradient(
    hsla(249, 65%, 35%, 1),
    hsla(248, 52%, 39%, 1),
    hsla(222, 39%, 42%, 1.00),
    hsla(168, 47%, 59%, 1)
    );
${Container}
`;

export const OverlayButton = styled(GButton)`
${Button}
`;

export const OverlayText = styled.p`

`;

export const Deployed = styled(Link)`
  color: #bbdbb4;
  font-family: Montserrat;
  text-decoration: none;

`;