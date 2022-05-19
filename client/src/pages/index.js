import { About } from "../components/About";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Skills } from "../components/Skills";
import { Page } from "../components/Page";

const Index = () => (
  <>
    <Container>
      <Page>
        <Hero />
      </Page>
      <Page id="about">
        <Main>
          <About />
          <Skills />
        </Main>
      </Page>
      <Nav />
      <Page id="contact">
        <Footer />
      </Page>
    </Container>
  </>
);

export default Index;
