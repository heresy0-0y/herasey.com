import React, { useEffect, useCallback } from "react";
import NextImage from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin as WheelGestures } from "embla-carousel-wheel-gestures";
import { motion } from "framer-motion";
import { BsInfoCircle, BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import {
  Flex,
  Box,
  IconButton,
  Text,
  Image,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { Modal } from './'

export const Carousel = ({ slides }) => {
  const { colorMode } = useColorMode();
  const bg = { light: "whiteAlpha.200", dark: "blackAlpha.200" };
  const color = { light: "green.800", dark: "green.200" };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      speed: 4,
      loop: true,
    },
    [WheelGestures()]
  );

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const arrowStyle = {
    pos: "absolute",
    w: "5%",
    color: color[colorMode],
    maxW: "2%",
    variant: "ghost",
    bg: "transparent",
    top: "50vh",
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
    px: "10vw",
  };

  const containerStyle = {
    display: "flex",
    userSelect: "none",
  };

  return (
    <Box>
      <Flex w="97vw" h="98vh" overflow="hidden" ref={emblaRef} align="center">
        <Box className="embla__container" {...containerStyle} display="flex">
          {slides.map((slide, index) => (
            <Box
              key={`${index}`}
              {...boxStyle}
              className="embla__slide"
              as={motion.div}
            >
              <Image
                as={NextImage}
                loading="eager"
                objectFit="contain"
                src={slide.src}
                alt={slide.alt}
              />
            </Box>
          ))}
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} />
      <IconButton onClick={onOpen} icon={<BsInfoCircle />} {...arrowStyle} top="95vh" right="3vw" />
      <Text pos="absolute" right="-17px" top="88vh" fontSize="0.8rem" p="null" m="null" sx={{ transform: 'rotate(90deg)' }}>project details</Text>
      <IconButton
        {...arrowStyle}
        aria-label="previous slide"
        left="3vw"
        onClick={scrollPrev}
        icon={<BsArrowLeftCircle />}
      />
      <IconButton
        right="3vw"
        aria-label="next slide"
        {...arrowStyle}
        onClick={scrollNext}
        icon={<BsArrowRightCircle />}
      />
    </Box>
  );
};
