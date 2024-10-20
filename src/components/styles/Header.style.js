import styled from "styled-components";

export const StyledHeader = styled.header`
  //   background-color: ${(props) => props.bg};
  //    background-color: ${({ bg }) => bg};
  background-color: ${({ theme }) => theme.colors.header};
  color: ${(props) => props.color};
  padding: 40px 0;

  //   h1 {
  //     color: red;
  //   }
  &:hover {
    background-color: black;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
