import React, {useEffect} from "react";
import {useRouter} from 'next/router'
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Button,
  Container,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Icon,
  useColorMode,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Link } from "./Link";

const Nav = ({ scrollTo }) => {
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
      <IconButton
        ref={btnRef}
        color={color[colorMode]}
        onClick={onOpen}
        aria-label="open navigation menu"
        icon={<Icon as={BsCaretLeft} />}
        top="1rem"
        right="1rem"
        zIndex={4}
        position="fixed"
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
              <DrawerHeader>navigation menu</DrawerHeader>
              <DrawerBody>
                <Stack align="center" spacing="2rem">
                  <Link url="https://linkedin.com/in/herasey">
                    <IconButton
                      aria-label="my linkedin profile"
                      w="2xs"
                      variant="outline"
                      icon={<Icon as={FiLinkedin} />}
                    />
                  </Link>
                  <Link url="https://github.com/heresy0-0y">
                    <IconButton
                      aria-label="my github profile"
                      w="2xs"
                      variant="outline"
                      icon={<Icon as={FiGithub} />}
                    />
                  </Link>
                  <Link url="/resume.pdf">
                    <IconButton
                      aria-label="my resume, pdf"
                      w="2xs"
                      variant="outline"
                      icon={<Icon as={IoIosPaper} />}
                    />
                  </Link>
                  <Link url="/#contact" external={false}>
                    <IconButton
                      aria-label="contact me"
                      w="2xs"
                      variant="outline"
                      icon={<Icon as={MdOutlineMailOutline} />}
                    />
                  </Link>
                  <DarkModeSwitch />
                </Stack>
              </DrawerBody>
            </Container>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  );
};

export default Nav;
