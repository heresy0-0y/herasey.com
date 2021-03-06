import React from "react";
import { Form, FormContainer, TextInput, Modal, MessageArea, ModalText, Label, SendInput} from "./ContactForm.elements";

const ContactForm = (props) => {
  const {sendMessage, messageSent} = props
  return (
    <>
      {/* <Modal messageSent={messageSent}> */}
       {/* <ModalText> thanks for reaching out ! <br/> i'll get back to you as soon as i can</ModalText> */}
      {/* </Modal> */}
        <FormContainer>
          <Form className="contact-form" onSubmit={sendMessage}>
            <Label>name</Label>
            <TextInput type="text" name="from_name" required/>
            <Label>email</Label>
            <TextInput type="text" name="reply_to" required/>
            <Label>message</Label>
            <MessageArea name="message"/>
            <SendInput type="submit" value="send"/>
          </Form>
        </FormContainer>
    </>
  );
};

export default ContactForm;
