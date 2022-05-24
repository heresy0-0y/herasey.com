import React, { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { WheelGesturesPlugin as WheelGestures } from "embla-carousel-wheel-gestures";

import { Box } from "@chakra-ui/react";
import Projects from "../screens/Projects/Projects";
import Contact from "../screens/Contact/Contact";
import { About, Container, Nav, Hero, Skills, Main, Page } from "../components";

const pageIndices = { contact: 3 };

const Index = () => {
  const ref = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  
  const router = useRouter();
  const path = router.asPath.slice(2);

  const pages = [
    { el: <Hero key={0} />, ref: ref },
    {
      el: (
        <Main key={1}>
          <About />
          <Skills />
        </Main>
      ),
      ref: about,
    },
    { el: <Projects key={2} />, ref: projects },
    { el: <Contact id="contact" key={3} />, ref: contact },
  ];
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

  const scrollTo = useCallback((i) => {
    embla && embla.scrollTo(i), [embla];
  }, [embla]);
  
    const onSelect = useCallback(() => {
      if (!embla) return;
    }, [embla]);


  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    scrollTo(pageIndices[path]);
  }, [embla, onSelect, router, scrollTo, path]);

  return (
    <>
      <Container embla={{ embla: viewportRef }} className="embla__viewport">
        <Box className="embla__container" h="100vh" w="100vw">
          {pages.map((page, index) => (
            <Page
              page={{ ref: pages[index].ref }}
              key={`${index}`}
              className="embla__slide">
              {page.el}
            </Page>
          ))}
        </Box>
      </Container>
      <Nav scrollTo={scrollTo} />
    </>
  );
};

export default Index;
