import React, { useState } from "react";
import NextImage from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import {
  Flex,
  Box,
  IconButton,
  Icon,
  Image,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Carousel = ({ slides }) => {
  const [currentSlide, SetCurrentSlide] = useState(0);
  const slideCount = slides.length;
  const slideWidth = useBreakpointValue({ base: 95, md: 90 });
  const { colorMode } = useColorMode();
  const [height, setHeight] = useState("100%");
  const [width, setWidth] = useState("100%");
  const bg = { light: "whiteAlpha.200", dark: "blackAlpha.200" };
  const arrowStyle = {
    pos: "absolute",
    w: "5%",
    maxW: "2%",
    variant: "ghost",
    bg: bg[colorMode],
    top: "50%",
    borderRadius: "full",
    zIndex: 3,
    _hover: {
      bg: bg[colorMode === "light" ? "dark" : "light"],
    },
  };
  const boxStyle = {
    w: "100%",
    h: height,
    pos: "static",
    flex: "none",
    shadow: "xl",
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const previousSlide = () => {
    SetCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };
  const nextSlide = () => {
    SetCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };
  return (
    <Flex w="100vw" h="100%" overflow="hidden" p={10}>
      <Flex w="100%" pos="relative">
        <Flex {...carouselStyle} w="100%" h="100%">
          {slides.map((slide, index) => (
            <Box
              zIndex={currentSlide === index ? 1 : -2}
              key={`slide-${index}`}
              {...boxStyle}>
              <Image
                as={NextImage}
                sx={{ objectFit: "contain", maxHeight: "80%", height: "80%" }}
                src={slide.src}
                alt={slide.alt}
                onLoad={({ target }) => {
                  const { width, naturalHeight, naturalWidth, height } = target;
                  setHeight(naturalHeight * (width / naturalWidth));
                }}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
      <IconButton
        {...arrowStyle}
        aria-label="previous slide"
        ml="3%"
        left="0"
        onClick={previousSlide}
        icon={<Icon as={BsArrowLeftCircle} />}
      />
      <IconButton
        right="0"
        mr="3%"
        aria-label="next slide"
        {...arrowStyle}
        onClick={nextSlide}
        icon={<Icon as={BsArrowRightCircle} />}
      />
    </Flex>
  );
};
