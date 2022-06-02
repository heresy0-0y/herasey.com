import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaRegSun, FaMoon } from "react-icons/fa";

export const DarkModeSwitch = ({ bg, color }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <FaMoon /> : <FaRegSun />}
      pos="absolute"
      color={color}
      bg={bg}
      borderRadius="full"
      onClick={(e) => {
        e.target.blur();
        toggleColorMode();
      }}
    />
  );
};
