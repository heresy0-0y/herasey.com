import { Flex, Box } from "@chakra-ui/react";

export const Page = (props) => {
  return (
    <Box minH="100vh" w="100vw" pos="relative">
      <Flex
        boxSize="full"
        direction="column"
        align="center"
        justify="space-around"
        as="section"
        {...props}
      />
    </Box>
  );
};
