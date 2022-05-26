import React, { useEffect } from "react";
import { Box, IconButton, Center, useBreakpointValue } from "@chakra-ui/react";

const PageProgress = ({ scrollProgress }) => {
  return (
    <Center h="100vh" top="0" left="0" bottom="0" pos="absolute">
      <Center h="98vh" w="5px">
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
          w="100%"
          borderRadius="lg"
        />
      </Center>
    </Center>
  );
};

export default PageProgress;
