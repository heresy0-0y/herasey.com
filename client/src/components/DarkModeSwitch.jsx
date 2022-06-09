import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaRegSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = ({ bg, color, display, right, top, buttonStyle }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <FaMoon /> : <FaRegSun />}
      pos="absolute"
      variant="outline"
      _hover={{ bg: bg }}
      color={color}
      {...buttonStyle}
      w="2rem"
      display={display}
      top={top}
      right={right}
      onClick={(e) => {
        e.target.blur();
        toggleColorMode();
      }}
    />
  );
};

export default ColorModeSwitch;
