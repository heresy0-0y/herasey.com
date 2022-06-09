import React, { useState, useEffect } from "react";
import { Flex, Center, IconButton } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { VscCircleFilled, VscCircleOutline } from "react-icons/vsc";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

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

  const pageUp = () => {
    setPage(currentPage - 1);
  };
  const pageDown = () => {
    setPage(currentPage + 1);
  };

  useEffect(() => {
    if (currentPage === 0) {
      setPageUp("scale(0,0)");
    } else {
      setPageUp("scale(1,1)");
    }
    if (currentPage === 3) {
      setPageDown("scale(0,0)");
    } else {
      setPageDown("scale(1,1)");
    }
  }, [currentPage]);
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
          variant="ghost"
          top={`${pages[page] * 4 + 45}%`}
          aria-label={`to ${page} section`}
          size="xs"
          key={page}
          {...buttonStyle}
          left="0"
          onClick={() => setPage(pages[page])}
          mb="2"
          icon={
            currentPage === pages[page] ? (
              <VscCircleFilled />
            ) : (
              <VscCircleOutline />
            )
          }
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
