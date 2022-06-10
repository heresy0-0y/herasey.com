import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Center, IconButton } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { VscCircleFilled, VscCircleOutline } from "react-icons/vsc";

export default function NavPageNav({
  pages,
  buttonStyle,
  currentPage,
  setPage,
}) {
  const firstPage = currentPage === 0;
  const lastPage = currentPage === 3;
  const [canPageDown, setPageDown] = useState("scale(1,1)");
  const [canPageUp, setPageUp] = useState("scale(1,1)");
  const [currentSection, setCurrentSection] = useState({
    0: { opacity: 0 },
    1: { opacity: 0 },
    2: { opacity: 0 },
    3: { opacity: 0 },
  });

  const sectionButtonStyle = {
    pos: "absolute",
    left: "1.5",
    variant: "unstyled",
    size: "xs",
    isRound: true,
  };
  const pageUp = (e) => {
    setPage(currentPage - 1);
    e.target.blur();
  };
  const pageDown = (e) => {
    setPage(currentPage + 1);
    e.target.blur();
  };

  useEffect(() => {
    if (firstPage) {
      setPageUp("scale(0,0)");
    } else {
      setPageUp("scale(1,1)");
    }
    if (lastPage) {
      setPageDown("scale(0,0)");
    } else {
      setPageDown("scale(1,1)");
    }
    const sections = Object.keys(pages);
    sections.forEach((section) => {
      if (pages[section] !== currentPage) {
        setCurrentSection((prev) => ({
          ...prev,
          [pages[section]]: { opacity: 0 },
        }));
      } else {
        setCurrentSection((prev) => ({
          ...prev,
          [pages[section]]: { opacity: 1 },
        }));
      }
    });
  }, [pages, currentPage, firstPage, lastPage]);
  return (
    <Center h="100vh" pos="absolute" left="0" top="0" bottom="0">
      <IconButton
        icon={<BsChevronUp />}
        onClick={pageUp}
        top="40%"
        size="xs"
        {...buttonStyle}
        pos="absolute"
        left="0"
        aria-label="previous section"
        sx={{
          transform: canPageUp,
          transition: "all 0.6s ease 0.6s",
        }}
      />
      {Object.keys(pages).map((page) => (
        <>
          <IconButton
            icon={<VscCircleFilled />}
            top={`${pages[page] * 4 + 46}%`}
            as={motion.button}
            animate={{ ...currentSection[pages[page]] }}
            transition={{ duration: 0.6 }}
            key={`${page}-here`}
            {...sectionButtonStyle}
          />
          <IconButton
            top={`${pages[page] * 4 + 46}%`}
            aria-label={`to ${page === "" ? "intro" : page} section`}
            key={page}
            icon={<VscCircleOutline />}
            onClick={() => setPage(pages[page])}
            {...sectionButtonStyle}
          />
        </>
      ))}
      <IconButton
        icon={<BsChevronDown />}
        onClick={pageDown}
        bottom="35%"
        {...buttonStyle}
        pos="absolute"
        size="xs"
        aria-label="next section"
        left="0"
        sx={{
          transform: canPageDown,
          transition: "all 0.6s ease 0s",
        }}
      />
    </Center>
  );
}
