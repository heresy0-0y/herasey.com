import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "./";
import theme from "../theme.js";

const InfoModal = ({
  initialFocus,
  finalFocus,
  isOpen,
  onOpen,
  onClose,
  project,
}) => {
  const { colorMode } = useColorMode();
  const MotionModal = motion(Modal);
  const MotionModalOverlay = motion(ModalOverlay);
  const MotionModalCloseButton = motion(ModalCloseButton);
  return (
    <MotionModal isOpen={isOpen} size="md" onClose={onClose} isCentered>
      <MotionModalOverlay />
      <ModalContent bgGradient={theme.colors.brand[colorMode]} color="text">
        <ModalHeader textAlign="center">
          sounds alive
          <MotionModalCloseButton />
        </ModalHeader>
        <ModalBody textAlign="center">
          <Link url="https://soundsalive.org">https://soundsalive.org</Link>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </MotionModal>
  );
};
export default InfoModal;
