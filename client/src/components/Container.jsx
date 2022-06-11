import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";
import theme from "../theme";

const Container = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: "green.800", dark: "green.200" };

  return (
    <Flex
      ref={props.embla.embla}
      className="embla__viewport"
      h="100%"
      w="100%"
      overflow="hidden"
      bgGradient={theme.colors.brand[colorMode]}
      color={color[colorMode]}
      font="fonts.mono"
      sx={{ draggable: true, userSelect: "true", focusable: true }}
      {...props}
    />
  );
};

export default Container;
