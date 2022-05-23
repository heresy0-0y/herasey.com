import { Flex, Heading, Center, Text } from "@chakra-ui/react";

export const Hero = () => (
  <Center boxSize="full">
    <Flex w="100%" direction="column">
      <Heading fontSize="10vw" fontFamily="fascinate inline">
        <Text
          align="center"
          bgClip="text"
          bgGradient="linear(to-l, teal.700, blue.800)">
          hera sey
        </Text>
        <Text bgClip="text" bgGradient="linear(to-l, teal.700, blue.800)">
          software developer
        </Text>
      </Heading>
    </Flex>
  </Center>
);
