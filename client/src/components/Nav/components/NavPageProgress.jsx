import React, { useEffect } from "react";
import { Box, IconButton, Center } from "@chakra-ui/react";
import { BsChevronBarUp } from "react-icons/bs";
import { PageNav } from './'

const PageProgress = ({ color, scrollProgress, currentPage, pages, setPage }) => {
  const isTitlePage = Number(currentPage) === 0;
  const [show, setShow] = React.useState("translateY(-150%)");
  const buttonStyle = {
    pos: "absolute",
    left: "2",
    variant: "ghost",
    color: `${color}`,
    borderRadius: "full",
  };
  useEffect(() => {
    if (isTitlePage) {
      setShow("translateY(-150%)");
    } else {
      setShow("translateY(0)");
    }
  }, [isTitlePage]);
  return (
    <Center h="100vh" top="0" left="-1px" bottom="0" pos="absolute">
      <Center h="100vh" w="5px" color={color}>
        <IconButton
          icon={<BsChevronBarUp />}
          top="2"
          onClick={(e) => {
            e.target.blur();
            setPage(0);
          }}
          sx={{
            transform: show,
            transition: "all 0.6s ease 0s",
          }}
          {...buttonStyle}
        />
        <PageNav buttonStyle={buttonStyle} pages={pages} setPage={setPage} currentPage={currentPage} />
        <Box
          h="100%"
          bgColor="whiteAlpha.200"
          pos="absolute"
          zIndex={3}
          w="100%"
          borderRadius="lg"
        />
        <Box
          h={`${scrollProgress}%`}
          bgColor="teal"
          pos="absolute"
          opacity="80%"
          w="100%"
          borderRadius="lg"
        />
      </Center>
    </Center>
  );
};

export default PageProgress;
