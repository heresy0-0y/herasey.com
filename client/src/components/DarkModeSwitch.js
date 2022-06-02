import { useColorMode, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaRegSun, FaMoon } from 'react-icons/fa';

export const DarkModeSwitch = ({ bg, color }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const right = useBreakpointValue({ base: "0", md: "5px" });
  const top = useBreakpointValue({ base: "3rem", md: "150px" });
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
