import React from "react";
import styled from "styled-components";

const Pagination = (props) => {
  const pageNumbers = [];
  const pageCount = Math.ceil(props.totalRepos / props.reposPerPage);

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <NavWrapper>
      <UList>
        {pageNumbers.map((number) => (
          <ListItem key={number}>
            <Button
              active={number === props.currentPage}
              onClick={() => props.paginate(number)}
            >
              {number}
            </Button>
          </ListItem>
        ))}
      </UList>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav``;

const UList = styled.ul`
  margin: 5px 0px;
  display: flex;
  list-style: none;
  justify-content: center;
`;

const ListItem = styled.li``;

const Button = styled.button`
  margin: 0px 5px;
  height: 75px;
  width: 75px;
  font-size: 1.5rem;
  color: white;
  background-color: #76b041;
  border: none;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: #3a5683;
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #3a5683
  `}
`;

export default Pagination;
