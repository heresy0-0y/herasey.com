import {
  Box,
  IconButton,
  Center,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "../../../components";
import { DarkModeSwitch } from "../../DarkModeSwitch";

const Buttons = ({ color, isOpen, bg }) => {
  const buttonStyle = {
    variant: "ghost",
    color: color,
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
        icon={
          <Center h="100%">
            <Icon w="sm" focusable={false} as={FiLinkedin} />
          </Center>
        }
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
    <DarkModeSwitch key="darkmodeswitch" color={color} bg={bg} />,
  ];

  const navButtons = useBreakpointValue({
    md: buttons.map((button, index) => (
      <Box
        display={{ base: "none", md: "block" }}
        key={index}
        w="2vw"
        pos="relative"
        variant="ghost"
      >
        {button}
      </Box>
    )),
    base: buttons.map((button, index) => (
      <Box w="2xs" key={index} display={isOpen ? "block" : "none"}>
        {button}
      </Box>
    )),
  });

  return <>{navButtons}</>;
};

export default Buttons;
