import React, { useRef, useState } from "react";
import styled from "styled-components";
import MapChart from "./MapChart";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
      justify-content: center;
    }
  `;
  const Title = styled.h2`
    font-weight: 300;
  `;
  const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media only screen and (max-width: 768px) {
      width: 300px;
    }
  `;

  const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  const Line = styled.img`
    height: 10px;
  `;
  const Subtitle = styled.h2`
    color: #da4ea2;
    letter-spacing: 1px;
  `;

  const Input = styled.input`
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: #e8e6e6;
    outline: none;
  `;
  const Textarea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: #e8e6e6;
    outline: none;
  `;
  const Button = styled.button`
    padding: 15px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
  `;
  const Right = styled.div`
    flex: 1;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  `;

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_k2yd0gc`,
        `template_8qji4hs`,
        ref.current,
        `p3g2QAdpgzuNCK64L`
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
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <WhatWeDo>
              <Line src="./img/line.png" />
              <Subtitle>Contact me</Subtitle>
            </WhatWeDo>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <Textarea
              placeholder="Write your message here...."
              name="message"
              rows={5}
            />
            <Button type="submit"> &lt; Send /&gt;</Button>
            {success && (
              <span>
                Your message has been sent. I'll get back to you soon.
              </span>
            )}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
