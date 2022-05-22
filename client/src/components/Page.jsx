import { Center, Box } from "@chakra-ui/react";

export const Page = (props) => {
  return (
    <Box h="100vh" w="100vw" flex="0 0 100%" pos="relative" className="emla__slide" >
      <Center as="section" w="100vw" h="100vh" {...props} />
    </Box>
  );
};
