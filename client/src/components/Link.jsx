import { default as NextLink } from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const LinkCombo = (props) => {
  return (
    <NextLink href={props.url} passHref>
      <ChakraLink isExternal={props.external}>{props.children}</ChakraLink>
    </NextLink>
  );
};

LinkCombo.defaultProps = {
  external: true,
};

export default LinkCombo
