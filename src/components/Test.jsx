import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding: 100px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
`;
const Line = styled.img`
  height: 10px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
  letter-spacing: 1px;
`;

const Wrapper = styled.div`
  width: 1300px;
  height: 100%;
  display: flex;
  gap: 100px;
`;

const Phone = styled.div`
  width: 200px;
  height: 179px;
  position: relative;
  margin: 50px;
`;
const Image = styled.img``;

const PhoneScreen = styled.div`
  width: 451px;
  height: 283px;
  position: absolute;
  top: 18px;
  left: 68px;
  overflow: scroll;
`;
const PhoneImage = styled.img`
  width: 100%;
`;

const Test = () => {
  return (
    <Container>
      <WhatWeDo>
        <Line src="./img/line.png" />
        <Subtitle>Highlighted Projects.</Subtitle>
      </WhatWeDo>
      <Wrapper>
        <Phone>
          <Image src="./img/laptop.png" alt="" srcset="" />
          <PhoneScreen>
            <PhoneImage src="./img/profile.png" alt="" srcset=""></PhoneImage>
          </PhoneScreen>
        </Phone>
        <Phone>
          <Image src="./img/laptop.png" alt="" srcset="" />
          <PhoneScreen>
            <PhoneImage src="./img/profile.png" alt="" srcset=""></PhoneImage>
          </PhoneScreen>
        </Phone>
      </Wrapper>
    </Container>
  );
};

export default Test;
