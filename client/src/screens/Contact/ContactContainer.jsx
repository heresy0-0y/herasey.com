import React, { useState, useEffect } from "react";
import { Flex, Button, useColorMode, useToast } from "@chakra-ui/react";
import { MdAlternateEmail, MdOutlineArrowForward } from "react-icons/md";
import { Contact, Link } from "../../components/";

const ContactContainer = (props) => {
  const userId = "user_noSGymCb0Ve25uMCUhnJZ";
  const templateId = "myDefault";
  const serviceId = "service_xso3s3r";
  const [messageSent, setMessageSent] = useState(false);
  const [messageSending, setMessageSending] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
  });
  const toast = useToast();
  const { colorMode } = useColorMode();
  const hover = { dark: "blue.900", light: "green.100" };
  const bg = { dark: "blackAlpha", light: "whiteAlpha" };
  useEffect(() => {
    const sentSuccessfully = () => { };
  });

  const sendMessage = (e) => {
    e.preventDefault();
    setMessageSending((prevState) => (prevState = true));
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        setMessageSent(true);
        setMessageSending(false);
        setFormData({ message: "", name: "", email: "" });
        toast({
          status: "success",
          title: "message sent ~ i'll get back to you soon ! :)",
        });
      }
    });
  };

  const sendEmail = () => {
    window.open("mailto:info@herasey.me")
  }
  return (
    <Flex direction="column" align="center" justify="space-evenly" h="60%">
      <Contact
        sending={messageSending}
        sendMessage={sendMessage}
        messageSent={messageSent}
        formData={formData}
        setFormData={setFormData}
        onSubmit={sendMessage}
        bg={bg[colorMode]}
        hover={hover[colorMode]}
      />
      <Button
        color={bg[colorMode]}
        _hover={{ bg: hover[colorMode] }}
        variant="link"
        size="sm"
        onClick={sendEmail}
        rightIcon={<MdOutlineArrowForward />}
        leftIcon={<MdAlternateEmail />}
        aria-label="open email client to send me an email"
      >
        email me with your favorite client
      </Button>
    </Flex>
  );
};
export default ContactContainer;
