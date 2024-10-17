import React from "react";
import { Container } from "./styles/Container.style";
import { Flex } from "./styles/Flex.style";
import { StyledFooter } from "./styles/Footer.style";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="../../../public/images/logo_white.svg" />
        <Flex>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Careers</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>Help Center</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
          <SocialIcons/>
        </Flex>
        <p>&copy; 2024 all righ reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
