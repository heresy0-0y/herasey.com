import React from "react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ContactForm } from "../components";

export default function ContactContainer(props) {
  const userId = "user_noSGymCb0Ve25uMCUhnJZ";
  const templateId = "myDefault";
  const serviceId = "service_xso3s3r";
  const [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        const sentSuccessfully = () => {
            
        }
    })

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        setMessageSent((prevState) => (prevState = true));

      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <>
      <ContactForm sendMessage={sendMessage} messageSent={messageSent} onSubmit={sendMessage} />
    </>
  );
}
