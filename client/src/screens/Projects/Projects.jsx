import React, { useState } from "react";
import Image from "next/image";
import {
  Flex,
  Box,
  useColorMode,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Carousel } from "../../components/Carousel";
import {
  desktopLanding,
  desktopSearch,
  mobileLanding,
  mobileSearch,
} from "../../../public/";

export default function () {
  const mobileSlides = [
    { src: mobileLanding, alt: "sounds alive home page screenshot" },
    { src: mobileSearch, alt: "sounds alive search screenshot" },
  ];
  const desktopSlides = [
    { src: desktopLanding, alt: "sounds alive home page screenshot" },
    { src: desktopSearch, alt: "sounds alive search screenshot" },
  ];
  const slides = useBreakpointValue({ base: mobileSlides, md: desktopSlides });

  return <Carousel slides={slides} />;
}
