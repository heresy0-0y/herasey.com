import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  useDisclosure,
  Drawer,
  Flex,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Container,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { BsCaretLeft } from "react-icons/bs";

import { DarkModeSwitch } from "../DarkModeSwitch";

import { Buttons, PageProgress, PageProgression } from "./components";

const Nav = ({ scrollTo, scrollProgress }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "linear(to-tr, blue.100, green.100)",
    dark: "linear(to-tr, teal.800, green.800)",
  };
  const color = { light: "green.800", dark: "green.200" };

  return (
    <>
      <PageProgress scrollProgress={scrollProgress}/>
      <Flex
        direction="column"
        align="center"
        pos="fixed"
        justify="space-between"
        top="1%"
        right="1%"
        w="7%"
        h="180px">
        <Buttons />
      </Flex>
      <IconButton
        ref={btnRef}
        display={{ base: "flex", md: "none" }}
        color={color[colorMode]}
        onClick={onOpen}
        aria-label="open navigation menu"
        icon={<Icon as={BsCaretLeft} />}
        top="1rem"
        right="1rem"
        zIndex={4}
        position={{ base: "fixed", md: "relative" }}
        variant="outline"></IconButton>
      <Container bgGradient={bgColor[colorMode]}>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}>
          <DrawerOverlay bg="blackAlpha.400" />
          <DrawerContent>
            <Container
              h="full"
              bgGradient={bgColor[colorMode]}
              color={color[colorMode]}>
              <DrawerCloseButton variant="outline" />
              <DrawerHeader fontFamily="montserrat alternates">
                navigation menu
              </DrawerHeader>
              <DrawerBody h="100%" overflow="hidden">
                <Flex
                  align="center"
                  direction="column"
                  spacing="2rem"
                  justify="space-around"
                  h="30%">
                  <Buttons isOpen={isOpen} />
                  <DarkModeSwitch />
                </Flex>
              </DrawerBody>
            </Container>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  );
};

export default Nav;
