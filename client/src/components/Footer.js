import { Flex, Spacer } from "@chakra-ui/react";
import { ContactContainer as Contact } from "./ContactContainer";

export const Footer = () => (
  <Flex minH="100vh" as="footer">
    <Spacer />
    <Contact />
    <Spacer />
  </Flex>
);
