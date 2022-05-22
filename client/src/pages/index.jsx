import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "../components/Container.jsx";
import Projects from "../screens/Projects/Projects";
import { WheelGesturesPlugin as WheelGestures } from "embla-carousel-wheel-gestures";
import { About } from "../components/About";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import Contact from "../screens/Contact/Contact";
import { Skills } from "../components/Skills";
import { Page } from "../components/Page";

const pages = [
  <Hero />,
  <Main>
    <About />
    <Skills />
  </Main>,
  <Projects />,
  <Contact />,
];

const Index = () => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      axis: "y",
      skipSnaps: true,
      loop: true,
    },
    [WheelGestures()]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <>
      <Container embla={viewportRef} className="embla__viewport">
        <Box className="embla__container" h="100vh" w="100vw">
          {pages.map((page, index) => (
            <Page className="embla__slide" key={index}>
              {page}
            </Page>
          ))}
        </Box>
      </Container>
      <Nav
        btnsEnabled={{ prev: prevBtnEnabled, next: nextBtnEnabled }}
        scrollNext={scrollNext}
      />
    </>
  );
};

export default Index;
