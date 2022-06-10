import React, { useState, useEffect } from "react";
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
    0: <VscCircleOutline />,
    1: <VscCircleOutline />,
    2: <VscCircleOutline />,
    3: <VscCircleOutline />,
  });

  const pageUp = () => {
    setPage(currentPage - 1);
  };
  const pageDown = () => {
    setPage(currentPage + 1);
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
          [pages[section]]: <VscCircleOutline />,
        }));
      } else {
        setCurrentSection((prev) => ({
          ...prev,
          [pages[section]]: <VscCircleFilled />,
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
          transition: "all 0.6s ease 0s",
        }}
      />
      {Object.keys(pages).map((page) => (
        <IconButton
          pos="absolute"
          top={`${pages[page] * 4 + 45}%`}
          aria-label={`to ${page === "" ? "intro" : page} section`}
          key={page}
          isRound={true}
          icon={currentSection[pages[page]]}
          variant="unstyled"
          size="xs"
          left="1.5"
          onClick={() => setPage(pages[page])}
          sx={{ transition: "all 0.6s ease 0s" }}
        />
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
