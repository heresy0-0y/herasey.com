import React from "react";
import { About } from "../components/About";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Skills } from "../components/Skills";
import { Page } from "../components/Page";
import Projects from "../screens/Projects/Projects";

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
      <Page>
        <Projects />
      </Page>
      <Nav />
      <Page id="contact">
        <Footer />
      </Page>
    </Container>
  </>
);

export default Index;
