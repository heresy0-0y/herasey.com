import React, { useCallback, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin as WheelGestures } from "embla-carousel-wheel-gestures";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

import Projects from "../screens/Projects/Projects";
import Contact from "../screens/Contact/Contact";
import { Container, Nav, Hero, Main, Page } from "../components";

const pageIndices = { "": 0, about: 1, projects: 2, contact: 3 };

const Index = () => {
  const router = useRouter();
  const path = router.asPath.slice(2);
  const [currentPage, setPage] = useState(pageIndices[path]);
  const [scrollProgress, setProgress] = useState(0);

  const contact = useRef(null);
  const ref = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);

  const [viewportRef, embla] = useEmblaCarousel(
    {
      axis: "y",
      containScroll: "trimSnaps",
      align: "end",
    },
    [WheelGestures()]
  );

  const pages = [
    { el: <Hero key={0} />, ref: ref },
    {
      el: <Main key={1} />,
      ref: about,
    },
    { el: <Projects key={2} />, ref: projects },
    { el: <Contact id="contact" key={3} />, ref: contact },
  ];

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPage(embla.selectedScrollSnap());
  }, [embla, setPage]);

  const scrollTo = useCallback(
    (i) => {
      embla && embla.scrollTo(i), [embla];
    },
    [embla]
  );

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setProgress(progress * 100);
  }, [embla, setProgress]);

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === "ArrowDown") setPage((prev) => (prev < 3 ? prev + 1 : prev));
    if (key === "ArrowUp") setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    document.documentElement.addEventListener("keydown", handleKeyDown);
    setPage(pageIndices[path]);
    console.log(path)
  }, [path]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    onSelect();
    onScroll();
    scrollTo(currentPage);
  }, [embla, onSelect, scrollTo, currentPage, onScroll]);

  return (
    <div>
      <Container
        as={motion.flex}
        embla={{ embla: viewportRef }}
        className="embla__viewport"
        tabIndex={0}
      >
        <Box className="embla__container" h="100vh" w="100vw" as={motion.div}>
          {pages.map((page, index) => (
            <Page page={{ ref: pages[index].ref }} key={`${index}`}>
              {page.el}
            </Page>
          ))}
        </Box>
      </Container>
      <Nav
        scrollTo={scrollTo}
        currentPage={currentPage}
        setPage={setPage}
        scrollProgress={scrollProgress}
      />
    </div>
  );
};

export default Index;
