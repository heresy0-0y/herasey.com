import { Flex, Box } from "@chakra-ui/react";

export const Page = (props) => {
  return (
    <Box h="100vh" pos="relative">
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
