import { useRef } from "react";
import { useColorMode, Flex, Heading, Center, Text } from "@chakra-ui/react";

const Hero = () => {
  // a big thank you to Andy Clarke for this super helpful tutorial for text gradients with shadows
  // https://stuffandnonsense.co.uk/blog/a-quick-shot-of-gradient-text-and-text-shadow
  const { colorMode } = useColorMode();
  const bgColor = {
    dark: "linear(to-tr, blue.100, green.100)",
    light: "linear(to-tr, teal.800, green.800)",
  };
  const textShadow = {
    dark: "-1px -1px 0 rgba(0,0,0,0.5), 1px 1px 0 rgba(255,255,255,0.25), 3px 3px 3px rgba(255,255,255,0.25)",
    light:
      "-1px -1px 0 rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.25), 3px 3px 3px rgba(0,0,0,.25)",
  };
  const shadows = {
    content: "attr(data-text)",
    pos: "absolute",
    align: "center",
    zIndex: -1,
    textShadow: textShadow[colorMode],
  };
  return (
    <Center boxSize="full">
      <Flex w="100%" direction="column">
        <Heading
          data-text="hera sey
          software developer"
          fontSize="10vw"
          fontFamily="montserrat alternates"
          text-fill-color="transparent"
          pos="relative"
        >
          <Text fontSize="25px" ml="20%" orientation="vertical" align="left">
            hi there!
            <br />
            my name is
          </Text>
          <Text
            align="center"
            bgClip="text"
            pos="relative"
            data-text="hera sey"
            sx={{ textFillColor: "transparent" }}
            bgGradient={bgColor[colorMode]}
            _before={shadows}
            _after={{ ...shadows, zIndex: -2, left: 0, right: 0 }}
          >
            hera sey
          </Text>
          <Text fontSize="25px" ml="20%" orientation="vertical" align="left">
            and i&apos;m a
          </Text>
          <Text
            bgClip="text"
            bgGradient="linear(to-l, teal.100, teal.400)"
            data-text="software developer"
            ml="5%"
            sx={{ textFillColor: "transparent" }}
            _before={shadows}
            _after={{
              ...shadows,
              zIndex: -2,
              left: 0,
              right: 0,
              bottom: 0,
              ml: "5%",
            }}
          >
            software developer
          </Text>
        </Heading>
      </Flex>
    </Center>
  );
};
export default Hero;
