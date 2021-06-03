import React from "react";
import styled from "styled-components";

const Header = () => (
  <StyledHeader>
    <Title>Github Repo Table</Title>
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  background-color: #2708a0;
  color: white;
  max-width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px black;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-shadow: 2px 2px 2px black;
`;

export default Header;
