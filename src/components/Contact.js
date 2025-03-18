import { useRef, useState } from "react";
import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 5%;
  max-width: 73%;
  margin: auto;

  @media (max-width: 768px) {
    padding: 5% 0;
    max-width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.5rem); 
  font-weight: 500;
  color: rgb(210, 212, 199);
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 15px;
  font-size: clamp(1rem, 2vw, 1rem);

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 15px;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(1rem, 2vw, 1rem);

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-family: "Google Sans", sans-serif;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  padding: 12px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

const P = styled.p`
  font-size: clamp(1rem, 2vw, 1rem);
  color: rgb(210, 212, 199);
  text-align: center;
  margin-top: 1rem;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_23gzqzm", 
        "template_lkd242o", 
        ref.current, 
        "NLvAY832C2_H3b0FN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Title>Contact Me</Title>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Input placeholder="Name" name="name" required />
          <Input type="email" placeholder="Email" name="email" required />
          <TextArea placeholder="Write your message" name="message" rows={6} required />
          <Button type="submit">Send</Button>
          {success && <P>Your message has been sent. I'll get back to you soon!</P>}
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;