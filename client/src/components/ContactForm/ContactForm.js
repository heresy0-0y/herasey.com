import React from "react";
import { Form, FormContainer, TextInput, MessageArea, Label, SendInput} from "./ContactForm.elements";

const ContactForm = (props) => {
  const {sendMessage } = props
  return (
    <>
    <FormContainer>
      <Form className="contact-form" onSubmit={sendMessage}>
          <Label>name</Label>
          <TextInput type="text" name="from_name"/>
          <Label>email</Label>
          <TextInput type="text" name="reply_to"/>
          <Label>message</Label>
          <MessageArea name="message"/>
          <SendInput type="submit" value="Send"/>
      </Form>
      </FormContainer>
    </>
  );
};

export default ContactForm;
