import { useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "../../components/Carousel";
import {
  desktopLandingLight,
  desktopSearchLight,
  desktopFocusLight,
  desktopFocusDark,
  desktopSearchDark,
  desktopLandingDark,
  mobileLandingLight,
  mobileSearchLight,
  mobileFocusLight,
  mobileFocusDark,
  mobileSearchDark,
  mobileLandingDark,
} from "../../../public/";

export default function () {
  const { colorMode } = useColorMode();
  const mobileLanding = { light: mobileLandingLight, dark: mobileLandingDark };
  const desktopLanding = {
    light: desktopLandingLight,
    dark: desktopLandingDark,
  };
  const mobileSearch = { light: mobileSearchLight, dark: mobileSearchDark };
  const desktopSearch = { light: desktopSearchLight, dark: desktopSearchDark };
  const mobileFocus = { light: mobileFocusLight, dark: mobileFocusDark };
  const desktopFocus = { light: desktopFocusLight, dark: desktopFocusDark };

  const mobileSlides = [
    { src: mobileLanding[colorMode], alt: "sounds alive home page screenshot" },
    { src: mobileSearch[colorMode], alt: "sounds alive search screenshot" },
    { src: mobileFocus[colorMode], alt: "sounds alive bird focus screenshot" },
  ];
  const desktopSlides = [
    {
      src: desktopLanding[colorMode],
      alt: "sounds alive home page screenshot",
    },
    { src: desktopSearch[colorMode], alt: "sounds alive search screenshot" },
    { src: desktopFocus[colorMode], alt: "sounds alive bird focus screenshot" },
  ];
  const slides = useBreakpointValue({ base: mobileSlides, md: desktopSlides });

  return <Carousel slides={slides} />;
}
