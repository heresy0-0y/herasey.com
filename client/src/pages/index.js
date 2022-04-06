import Head from 'next/head'
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
 <>
 <Head>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg"  />
  <meta name="theme-color" content="#ffffff" />
  </Head>
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
  </>
);

export default Index;
