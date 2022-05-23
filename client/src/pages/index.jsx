import React, {  useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import useEmblaCarousel from "embla-carousel-react";
import {motion } from "framer-motion"
import { WheelGesturesPlugin as WheelGestures } from "embla-carousel-wheel-gestures";

import { Box } from "@chakra-ui/react";
import Projects from "../screens/Projects/Projects";
import Contact from "../screens/Contact/Contact";
import { About, Container, Nav, Hero, Skills, Main, Page } from "../components";



const pageIndices = {contact: 3,}

const pages = [
  <Hero key={0} />,
  <Main key={1}>
    <About />
    <Skills />
  </Main>,
  <Projects key={2} />,
  <Contact id="contact" key={3} />,
];

const Index = () => {
  const router = useRouter()
  const path = router.asPath.slice(2)
 
  const [viewportRef, embla] = useEmblaCarousel(
    {
      axis: "y",
      skipSnaps: false,
      dragFree: false,
      align: "end",
      speed: 6,
    },
    [WheelGestures()]
  );

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollTo = useCallback((i) => embla && embla.scrollTo(i), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;


  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    scrollTo(pageIndices[path])
  }, [embla, onSelect]);

  return (
    <>
      <Container embla={{ embla: viewportRef }} className="embla__viewport">
        <Box className="embla__container" h="100vh" w="100vw">
          {pages.map((page, index) => (
            <Page key={`${index}`} className="embla__slide">
              {page}
            </Page>
          ))}
        </Box>
      </Container>
      <Nav

        scrollTo={scrollTo}
      />
    </>
  );
};

export default Index;