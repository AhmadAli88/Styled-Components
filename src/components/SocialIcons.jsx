import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com/yourpage" target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/yourpage" target="_blank">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/yourpage" target="_blank">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
