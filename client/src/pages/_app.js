import React from "react";
import Head from "next/head";
import "@fontsource/fascinate-inline";
import "@fontsource/montserrat-alternates";
import "@fontsource/source-code-pro";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider options={{}}>
        <Head>
          <title>Hera Sey</title>
          <meta
            name="viewport"
            content="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1"
          />
          <meta
            name="description"
            content="Portfolio Site for Hera Sey, Software Developer"
          />
        </Head>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
