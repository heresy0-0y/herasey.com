import React, { useEffect } from "react";
import { Box, IconButton, Center, useBreakpointValue } from "@chakra-ui/react";
import { MdArrowUpward } from "react-icons/md";

const PageProgress = ({ scrollProgress, currentPage, setPage }) => {
  const isTitlePage = currentPage === 0;
  return (
    <Center h="100vh" top="0" left="0" bottom="0" pos="absolute">
      <Center h="100vh" w="5px">
        <IconButton
          icon={<MdArrowUpward />}
          variant="ghost"
          pos="absolute"
          top="0"
          left="2"
          display={isTitlePage ? "none" : "flex"}
          onClick={() => setPage(0)}
          borderRadius="full"
        />
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
