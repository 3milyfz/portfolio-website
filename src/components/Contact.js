import { useRef, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  align-self: center;
  font-size: 40px;
  font-weight: 400;
  color: rgb(210, 212, 199);
`;

const Form = styled.form`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;

const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 15px;
  font-size: large;

  @media only screen and (max-width: 768px) {
    font-size: medium;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  border-radius: 15px;
  font-family:'Google Sans', sans-serif;
  font-size: large;

  @media only screen and (max-width: 768px) {
    font-size: medium;
  }
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.08); /* Use RGBA with opacity */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Use RGBA with opacity */
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  font-size: x-large;
  font-family:'Google Sans', sans-serif;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const P = styled.p`
  font-size: large;
  color: rgb(210, 212, 199);
  align-self: center;
`;

const Contact = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit =e=> {
    e.preventDefault()

    emailjs.sendForm('service_6kje0ys', 'template_lkd242o', ref.current, 'NLvAY832C2_H3b0FN')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      }
      );
  }

  return (
    <Section>
      <Container>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={8} />
            <Button type="submit">Send</Button>
            {success && <P>Your message has been sent. I'll get back to you soon!</P>}
          </Form>
      </Container>
    </Section>
  )
}

export default Contact;