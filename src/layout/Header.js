import React from "react";
import styled from "styled-components";
import { colors, fontSize, spacings } from "../variables";

const Header = (props) => {
  const onChangeHandler = (e) => {
    props.changeDisplayAmount(parseInt(e.target.value));
  };

  return (
    <StyledHeader>
      <Title>Github Repo Table</Title>
      <DropDownContainer>
        <DropDownLabel htmlFor='reposPerPage'>Repos per page</DropDownLabel>
        <DropDown name='reposPerPage' onChange={onChangeHandler}>
          <option value='20'>20</option>
          <option value='40'>40</option>
          <option value='60'>60</option>
          <option value='80'>80</option>
          <option value='100'>100</option>
        </DropDown>
      </DropDownContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${colors.darkBlue};
  box-shadow: 0px 1px 3px black;
  color: ${colors.white};
  display: flex;
  height: 6rem;
  justify-content: center;
  max-width: 100%;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${fontSize.xl};
  text-shadow: 2px 2px 2px black;
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 3%;
`;

const DropDown = styled.select`
  align-self: center;
  font-size: ${fontSize.sm};
  width: 50%;
`;

const DropDownLabel = styled.label`
  font-size: ${fontSize.md};
  padding-bottom: ${spacings.sm};
  text-align: center;
`;

export default Header;
