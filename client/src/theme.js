import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  body: `source-code-pro, monospace`,
  heading: "source-code-pro, monospace",
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },

  colors: {
    red: {
      50: "#FFE5E5",
      100: "#FFB8B8",
      200: "#FF8A8A",
      300: "#FF5C5C",
      400: "#FF2E2E",
      500: "#FF0000",
      600: "#CC0000",
      700: "#990000",
      800: "#660000",
      900: "#330000",
    },
    orange: {
      50: "#FFF1E5",
      100: "#FFD7B8",
      200: "#FFBD8A",
      300: "#FFA35C",
      400: "#FF892E",
      500: "#FF6F00",
      600: "#CC5900",
      700: "#994300",
      800: "#662C00",
      900: "#331600",
    },
    gray: {
      50: "#F0F2F4",
      100: "#D6DBE0",
      200: "#BCC4CD",
      300: "#A2ADB9",
      400: "#8896A5",
      500: "#6D7F92",
      600: "#576675",
      700: "#424C57",
      800: "#2C333A",
      900: "#16191D",
    },
    yellow: {
      50: "#FFFCE5",
      100: "#FFF5B8",
      200: "#FFEF8A",
      300: "#FFE95C",
      400: "#FFE32E",
      500: "#FFDD00",
      600: "#CCB100",
      700: "#998400",
      800: "#665800",
      900: "#332C00",
    },
    green: {
      50: "#EAFAF2",
      100: "#C5F2DB",
      200: "#9FE9C3",
      300: "#7AE1AC",
      400: "#55D894",
      500: "#2FD07D",
      600: "#26A664",
      700: "#1C7D4B",
      800: "#135332",
      900: "#092A19",
    },
    teal: {
      50: "#E8FCFC",
      100: "#BFF7F7",
      200: "#96F2F2",
      300: "#6EEDED",
      400: "#45E8E8",
      500: "#1CE3E3",
      600: "#16B6B6",
      700: "#118888",
      800: "#0B5B5B",
      900: "#062D2D",
    },
    cyan: {
      50: "#E7F9FE",
      100: "#BCEDFB",
      200: "#90E2F9",
      300: "#65D6F6",
      400: "#39CBF3",
      500: "#0EBFF1",
      600: "#0B99C1",
      700: "#087391",
      800: "#064C60",
      900: "#032630",
    },
    blue: {
      50: "#E6E6FE",
      100: "#BABAFC",
      200: "#8E8EFB",
      300: "#6262F9",
      400: "#3636F7",
      500: "#0A0AF5",
      600: "#0808C4",
      700: "#060693",
      800: "#040462",
      900: "#020231",
    },
    purple: {
      50: "#F4E5FF",
      100: "#E1B8FF",
      200: "#CE8AFF",
      300: "#BB5CFF",
      400: "#A82EFF",
      500: "#9400FF",
      600: "#7700CC",
      700: "#590099",
      800: "#3B0066",
      900: "#1E0033",
    },
    pink: {
      50: "#FCE9EC",
      100: "#F6C0CA",
      200: "#F198A7",
      300: "#EB7085",
      400: "#E54763",
      500: "#E01F40",
      600: "#B31933",
      700: "#861327",
      800: "#5A0C1A",
      900: "#2D060D",
    },
    brand: {
      light: "linear(to top right, #BABAFC,#C5F2DB )",
      dark: "linear(to top right, #0B5B5B, #135332 )",
    },
  },
  semanticTokens: {
    colors: {
      text: {
        default: "green.800",
        _dark: "green.200",
      },
    },
  },

  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: "0 0 3000 3163",
    },
  },
});

export default theme;
