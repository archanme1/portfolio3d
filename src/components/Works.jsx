import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import WebDesignTwo from "./WebDesignTwo";
import GithubDesign from "./GithubDesign";
import UiuxDesign from "./UiuxDesign";
import MobileApp from "./MobileApp";
import CmsDesign from "./CmsDesign";

const skills = [
  "FRONT-END TECHS",
  "BACK-END TECHS",
  "GIT/GITHUB",
  "UX/UI DESIGN",
  "HEADLESS CMS",
  "MOBILE APPLICATIONS",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  letter-spacing: 2px;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: alterText 0.5s linear both;

      @keyframes alterText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("FRONT-END TECHS");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {skills.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "FRONT-END TECHS" ? (
            <WebDesign />
          ) : work === "BACK-END TECHS" ? (
            <WebDesignTwo />
          ) : work === "GIT/GITHUB" ? (
            <GithubDesign />
          ) : work === "UX/UI DESIGN" ? (
            <UiuxDesign />
          ) : work === "HEADLESS CMS" ? (
            <CmsDesign />
          ) : (
            <MobileApp />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
