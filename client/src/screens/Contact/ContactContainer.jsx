import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Contact } from "../../components/";

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

  useEffect(() => {
    const sentSuccessfully = () => {};
  });

  const sendMessage = (e) => {
    e.preventDefault();
    setMessageSending((prevState) => (prevState = true));
    console.log(formData);
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
      }
    });
  };
  return (
    <>
      <Contact
        sending={messageSending}
        sendMessage={sendMessage}
        messageSent={messageSent}
        formData={formData}
        setFormData={setFormData}
        onSubmit={sendMessage}
      />
    </>
  );
};
export default ContactContainer;
