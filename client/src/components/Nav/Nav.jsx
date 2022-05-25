import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  useDisclosure,
  Drawer,
  Flex,
  Center,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Button,
  ButtonGroup,
  Container,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Icon,
  useColorMode,
  Stack,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { Link } from "../Link";

const Nav = ({ scrollTo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "linear(to-tr, blue.100, green.100)",
    dark: "linear(to-tr, teal.800, green.800)",
  };
  const color = { light: "green.800", dark: "green.200" };

  const buttonStyle = {
    variant: "ghost",
    color: `${color[colorMode]}`,
    borderRadius: "full",
    w: "full",
    _focus: {
      boxShadow:
        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
    },
  };
  const buttons = [
    <Link url="https://linkedin.com/in/herasey" key="linkedin">
      <IconButton
        aria-label="my linkedin profile"
        {...buttonStyle}
        icon={<Icon w="sm" focusable={false} as={FiLinkedin} />}
      />
    </Link>,
    <Link url="https://github.com/heresy0-0y" key="github">
      <IconButton
        {...buttonStyle}
        aria-label="my github profile"
        icon={<Icon focusable={false} as={FiGithub} />}
      />
    </Link>,
    <Link url="/resume.pdf" key="resume">
      <IconButton
        aria-label="my resume, pdf"
        {...buttonStyle}
        id="resume button"
        icon={
          <Icon focusable={false} htmlFor="resume button" as={IoIosPaper} />
        }
      />
    </Link>,
    <Link url="/#contact" external={false} key="contact form">
      <IconButton
        {...buttonStyle}
        aria-label="contact me"
        icon={<Icon focusable="false" as={MdOutlineMailOutline} />}
      />
    </Link>,
  ];

  return (
    <>
      <Flex
        direction="column"
        align="center"
        pos="fixed"
        justify="space-between"
        top="1%"
        right="1%"
        shouldWrapChildren
        w="7%"
        h="180px">
        {buttons.map((button, index) => (
          <Box
            color={color[colorMode]}
            key={index}
            w="3vw"
            pos="relative"
            variant="ghost">
            {button}
          </Box>
        ))}
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
              <DrawerBody>
                <ButtonGroup variant="outline">
                  <Stack align="center" spacing="2rem">
                    {buttons.map((button, index) => (
                      <Box w="2xs" key={index}>
                        {button}
                      </Box>
                    ))}
                    <DarkModeSwitch />
                  </Stack>
                </ButtonGroup>
              </DrawerBody>
            </Container>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  );
};

export default Nav;