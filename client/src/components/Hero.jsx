import { Flex, Heading, Center, Text } from "@chakra-ui/react";

const Hero = () => (
  <Center boxSize="full">
    <Flex w="100%" direction="column">
      <Heading fontSize="10vw" fontFamily="montserrat alternates">
        <Text
          align="center"
          bgClip="text"
          bgGradient="linear(to-l, teal.700, teal.800)">
          hera sey
        </Text>
        <Text bgClip="text" bgGradient="linear(to-l, teal.700, teal.800)">
          software developer
        </Text>
      </Heading>
    </Flex>
  </Center>
);
export default Hero;
