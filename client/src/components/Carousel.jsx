import React, { useState } from "react";
import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Flex, Box, IconButton, useColorMode } from "@chakra-ui/react";

export const Carousel = ({ slides }) => {
  const [currentSlide, SetCurrentSlide] = useState(0);
    const slideCount = slides.length;
    
    const {colorMode} = useColorMode()
    const bg = {light: "green", dark: "green"}
  const arrowStyle = {
    pos: "absolute",
    top: "50%",
    p: "16px",
    w: "auto",
      mt: "-22px",
    bg: bg[colorMode]
  }
    const boxStyle = {
        w: "95vw",
        h: "95vh",
        flex: "none",
        shadow: "md"
    }
  const carouselStyle = {
    transition: "all .5s",
  };
  const previousSlide = () => {
    SetCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };
  const nextSlide = () => {
    SetCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };
  return (
    <Flex w="100vw" p={10} alignItems="center" justifyContent="center">
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex w="100vw" {...carouselStyle}>
          {slides.map((slide, index) => (
            <Box
            key={`slide-${index}`}
            zIndex={currentSlide === index ? 1 : -1}
              {...boxStyle}>
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="contain"
                style={{ backgroundSize: "cover" }}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
      <IconButton
        {...arrowStyle}
              icon={<BsArrowLeftCircle ndex={ 2}/>}
              variant="outline"
              color="blue"
        top="50%"
        left="0"
        onClick={previousSlide}
      />
      <IconButton
        icon={<BsArrowRightCircle/>}

        top="50%"
        right="0"
        {...arrowStyle}
        onClick={nextSlide}
      />
    </Flex>
  );
};
