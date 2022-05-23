import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "linear(to-tr, blue.100, green.100)",
    dark: "linear(to-tr, teal.800, green.800)",
  };

  const color = { light: "green.800", dark: "green.200" };
  return (
    <Flex
      ref={props.embla.embla}
      className="embla__viewport"
      h="100%"
      w="100%"
      overflow="hidden"
      bgGradient={bgColor[colorMode]}
      color={color[colorMode]}
      font="fonts.mono"
      sx={{ draggable: true, userSelect: "none" }}
      {...props}
    />
  );
};
