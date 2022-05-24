import { Center, Box } from "@chakra-ui/react";

const Page = (props) => {
  return (
    <Box focusable={true} h="100vh" w="100vw" flex="0 0 100%" pos="relative" className="emla__slide"  ref={props.page.ref} >
      <Center focusable={true} as="section" w="100vw" h="100vh" {...props} />
    </Box>
  );
};
export default Page