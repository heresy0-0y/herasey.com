import { Stack } from "@chakra-ui/react";

import { About, Skills } from "./";

const Main = (props) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    pt="8rem"
    px="1rem"
    >
    <About />
    <Skills />
  </Stack>
);

export default Main;
