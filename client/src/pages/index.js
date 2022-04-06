import {
  About
} from "../components/About";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Skills } from "../components/Skills";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <About />
      <Skills />
    </Main>
    <Nav />
    <Footer>

    </Footer>
  </Container>
);

export default Index;
