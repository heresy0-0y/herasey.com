import React, { useState, useEffect, useCallback, useRef } from "react";
import NextImage from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin as WheelGestures } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import {
  Flex,
  Center,
  Box,
  IconButton,
  Icon,
  Image,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Carousel = ({ slides }) => {
  const autoplay = useRef(
    Autoplay(
    {delay: 6000, stopOnInteraction: true}, (emblaRoot) => emblaRoot.parentElement
  )
)
  const { colorMode } = useColorMode();
  const bg = { light: "whiteAlpha.200", dark: "blackAlpha.200" };
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      speed: 4,
      loop: true,
    },
    [WheelGestures(), autoplay.current]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset()
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset()
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

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
    flex: "0 0 100%",
    pos: "relative",
    maxH: "98vh",
    maxW: "98vw",
    px: "1%",
  };

  const containerStyle = {
    display: "flex",
    userSelect: "none",
  };

  return (
    <Box>
      <Flex w="98vw" h="98vh" overflow="hidden" ref={viewportRef} align="center">
        <Box className="embla__container" {...containerStyle} display="flex" >
          {slides.map((slide, index) => (
            <Box key={`${index}`} {...boxStyle} className="embla__slide">
              <Image
                as={NextImage}
                objectFit="contain"
                src={slide.src}
                alt={slide.alt}
              />
            </Box>
          ))}
        </Box>
      </Flex>
      <IconButton
        {...arrowStyle}
        aria-label="previous slide"
        ml="3%"
        left="0"
        onClick={scrollPrev}
        icon={<Icon as={BsArrowLeftCircle} />}
      />
      <IconButton
        right="0"
        mr="3%"
        aria-label="next slide"
        {...arrowStyle}
        onClick={scrollNext}
        icon={<Icon as={BsArrowRightCircle} />}
      />
    </Box>
  );
};
