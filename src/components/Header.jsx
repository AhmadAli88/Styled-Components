import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.style";
import { Container } from "./styles/Container.style";
import { Button } from "./styles/Button.style";
import { Flex } from "./styles/Flex.style";
const Header = () => {
  return (
    <StyledHeader bg="green" color="white">
      <Container>
        <Nav>
          <Logo src="../../public/images/logo.svg" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build Community to fall in love</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              hic laboriosam omnis earum? Mollitia eum, iusto dolorem tenetur
              voluptatem expedita!
            </p>
            <Button bg="#ff0099" color="#fff">Start a free trial</Button>
          </div>
          <Image src="../..//images/illustration-mockups.svg"/>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
