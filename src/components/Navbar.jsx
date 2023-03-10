import React from "react";
import styled from "styled-components";
import PDF from "../doc/archan.pdf";

const Navbar = () => {
  const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
      widtgh: 100%;
    }
  `;
  const Container = styled.div`
    width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
      width: 100%;
      padding: 10px;
      gap: 50px;
    }
  `;
  const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
  `;
  const Logo = styled.img`
    height: 30px;

    @media only screen and (max-width: 768px) {
      height: 28px;
    }
  `;
  const List = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  `;
  const ListItem = styled.li`
    /* cursor: pointer; */
  `;
  const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `;
  const Icon = styled.img`
    width: 20px;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  `;
  const Button = styled.a`
    width: 150px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;

    @media only screen and (max-width: 768px) {
      width: 120px;
      font-size: 10px;
    }
  `;

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home &gt;</ListItem>
            <ListItem>About me &gt;</ListItem>
            <ListItem>Works &gt;</ListItem>
            <ListItem>Contact me &gt;</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button href={PDF} target="_blank">
            &lt; My Resume /&gt;
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
