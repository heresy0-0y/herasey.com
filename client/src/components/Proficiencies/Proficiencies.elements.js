import styled from "styled-components";
import {
  SiStyledComponents,
  SiCss3,
  SiDigitalocean,
  SiGithub,
  SiGit,
  SiJavascript,
  SiJsonwebtokens,
  SiReact,
  SiReactrouter,
  SiRss,
  SiRuby,
  SiRails,
  SiNetlify,
  SiNodemon,
  SiNodeDotJs,
  SiNeovim,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiHtml5,
  SiUbuntu,
  SiLinkedin,
  SiLinux,
  SiJava,
  SiDocker,
  SiCplusplus,
  SiCsharp,
  SiHeroku,
  SiHackerrank,
  SiSass,
  SiElectron,
  SiArduino,
  SiAngular,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobepremiere,
} from "react-icons/si";
import { Container } from "../../globalStyles";

export const IconsContainer = styled(Container)`
  display: inline-grid;
  padding: 1.2rem;
  box-sizing: content-box;
  width: 100vw;
  border-bottom: groove .4em;
  border-image: repeating-linear-gradient(.8deg,  hsla(189, 21%, 58%, 1), hsla(248, 52%, 39%, 1), hsla(189, 21%, 58%, 1) 20px) 6;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: auto;
  background-color: rgba(0,0,0,0);
  justify-items: center;
  row-gap: 1.5rem;
  box-shadow:0 2em 2.6em -2.6em hsla(189, 21%, 58%, 1);
  & > * {
      font-size: 5rem;
      };
  @media screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: shrink;
    };
  
  ${Container}
`;

export const AboutMe = styled.div`
  color: #bbdbb4;
  font-family: Montserrat;
  font-size: 1.7rem;
  margin: 1.2rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const StyledComponentsIcon = styled(SiStyledComponents)``;

export const CssIcon = styled(SiCss3)``;

export const DigitalOceanIcon = styled(SiDigitalocean)``;

export const GithubIcon = styled(SiGithub)``;

export const GitIcon = styled(SiGit)``;

export const JsIcon = styled(SiJavascript)``;

export const JsonWebTokensIcon = styled(SiJsonwebtokens)``;

export const ReactIcon = styled(SiReact)``;

export const ReactRouterIcon = styled(SiReactrouter)``;

export const RssIcon = styled(SiRss)``;

export const RubyIcon = styled(SiRuby)``;

export const RailsIcon = styled(SiRails)``;

export const HerokuIcon = styled(SiHeroku)``;

export const NodeJsIcon = styled(SiNodeDotJs)``;
export const NodemonIcon = styled(SiNodemon)``;

export const NetlifyIcon = styled(SiNetlify)``;

export const NeovimIcon = styled(SiNeovim)``;
