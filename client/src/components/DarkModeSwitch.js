import { useColorMode, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaRegSun, FaMoon } from 'react-icons/fa';

export const DarkModeSwitch = ({ bg, color }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const right = useBreakpointValue({ base: "0", md: "3rem" });
  const top = useBreakpointValue({ base: "3rem", md: "0" });
  return (
    <IconButton
      icon={isDark ? <FaMoon /> : <FaRegSun />}
      pos="absolute"
      color={color}
      top={top}
      bg={bg}
      right={right}
      borderRadius="full"
      onClick={(e) => {
        e.target.blur();
        toggleColorMode();
      }}
    />
  );
};
