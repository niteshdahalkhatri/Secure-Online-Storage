import React from "react";
import * as s from "./ContactUs.style";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";

export default function ContactUs() {
  const history = useHistory();
  function handleSendMsg(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ule7v71",
        "template_ssg9ubs",
        e.target,
        "user_q5FzqvXSPxQuuhsluxV9E"
      )
      .then(
        (result) => {
          history.push("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <>
      <s.ContactBackground>
        <s.Logo to="/">SOS</s.Logo>
        <s.ContactForm onSubmit={handleSendMsg}>
          <s.ContactContainer>
            <s.Label htmlFor="name">Name : </s.Label>
            <s.Input
              type="text"
              id="name"
              name="name"
              placeholder="Your name here"
              required
            />
          </s.ContactContainer>
          <s.ContactContainer>
            <s.Label htmlFor="email">Email : </s.Label>
            <s.Input
              type="email"
              name="email"
              id="email"
              placeholder="Your In-App Email"
              required
            />
          </s.ContactContainer>
          <s.ContactContainer>
            <s.Label htmlFor="subject">Subject : </s.Label>
            <s.Input
              type="text"
              name="subject"
              id="subject"
              placeholder="Your subject here"
              required
            />
          </s.ContactContainer>
          <s.ContactContainer>
            <s.Label htmlFor="message">Message : </s.Label>
            <s.MessageTextarea
              name="message"
              id="message"
              placeholder="Your Message here"
              required
            ></s.MessageTextarea>
          </s.ContactContainer>
          <s.SubmitButton type="submit">Send</s.SubmitButton>
        </s.ContactForm>
      </s.ContactBackground>
    </>
  );
}
