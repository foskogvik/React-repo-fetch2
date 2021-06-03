import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const onChangeHandler = (e) => {
    props.changeDisplayAmount(parseInt(e.target.value));
  };

  return (
    <StyledHeader>
      <Title>Github Repo Table</Title>
      <label htmlFor='reposPerPage'>Repos per page</label>
      <select name='reposPerPage' onChange={onChangeHandler}>
        <option value='20'>20</option>
        <option value='40'>40</option>
        <option value='60'>60</option>
        <option value='80'>80</option>
        <option value='100'>100</option>
      </select>
    </StyledHeader>
  );
};

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
