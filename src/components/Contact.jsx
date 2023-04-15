import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
`;
const Title = styled.h1`
  font-weight: 100;
`;
const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 8px;
`;
const Button = styled.button`
  background-color: #EEA47FFF;
  border: none;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
`;
const Right = styled.div`

`;

function Contact() {
  const ref = useRef();

  const { success, setSuccess } = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dmwa3s",
        "template_f2p8phh",
        ref.current,
        "e_isrtTaX36EC5RNd"
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
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact  🚀</Title>
            <Input placeholder="Name" name="name"></Input>
            <Input placeholder="Email" name="email"></Input>
            <TextArea
              placeholder="Write you message"
              rows={10}
              name="message"
            ></TextArea>
            <Button>Send</Button>
            {success && "Your message has been send"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
