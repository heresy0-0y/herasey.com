import React, { useEffect } from "react";
import { Box, IconButton, Center, useBreakpointValue, Slide } from "@chakra-ui/react";
import { BsChevronBarUp, BsChevronUp, BsChevronDown } from "react-icons/bs";

const PageProgress = ({ scrollProgress, currentPage, setPage }) => {
  const isTitlePage = Number(currentPage) === 0;
  const [show, setShow] = React.useState('translateX(-150%)');
  useEffect(() => {
    if (isTitlePage) {
      setShow('translateY(-150%)');
    } else { setShow('translateY(0)'); }
  })
  return (
    <Center h="100vh" top="0" left="0" bottom="0" pos="absolute">
      <Center h="100vh" w="5px">
        <IconButton
          icon={<BsChevronBarUp />}
          variant="ghost"
          pos="absolute"
          top="3"
          left="3"
          onClick={(e) => {
            e.target.blur()
            setPage(0)
          }}
          borderRadius="full"
          sx={{
            transform: show,
            transition: "all 0.6s ease 0s"
          }}
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
