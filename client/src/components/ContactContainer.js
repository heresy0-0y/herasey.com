import React, {useState, useEffect} from 'react'
import emailjs from '@emailjs/browser'
import {Contact} from './Contact'

export const ContactContainer = (props) => {
    const userId = "user_noSGymCb0Ve25uMCUhnJZ";
    const templateId = "myDefault";
    const serviceId = "service_xso3s3r";
    const [messageSent, setMessageSent] = useState(false);
    const [messageSending, setMessageSending] = useState(false)
    useEffect(() => {
        const sentSuccessfully = () => {
            
        }
    })

  const sendMessage = (e) => {
    e.preventDefault();
    setMessageSending((prevState) => (prevState = true))
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        setMessageSent((prevState) => (prevState = true));
        setMessageSending((prevState) => (prevState = false))

      },
      (error) => {
        console.log(error);
      }
    );
  };
    return (
        <>
        <Contact sending={messageSending} sendMessage={sendMessage} messageSent={messageSent} onSubmit={sendMessage}/>
        </>
    )
}