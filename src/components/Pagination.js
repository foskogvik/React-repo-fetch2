import React from "react";
import styled from "styled-components";
import { colors, fontSize, spacings } from "../variables";

const Pagination = ({ totalRepos, reposPerPage, currentPage, paginate }) => {
  const pageNumbers = [];
  const pageCount = Math.ceil(totalRepos / reposPerPage);

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <Navigation>
      <NavigationList>
        {pageNumbers.map((number) => (
          <NavigationListItem key={number}>
            <NavigationButton
              active={number === currentPage}
              onClick={() => paginate(number)}
            >
              {number}
            </NavigationButton>
          </NavigationListItem>
        ))}
      </NavigationList>
    </Navigation>
  );
};

const Navigation = styled.nav`
  background-color: ${colors.darkBlue};
  height: 6rem;
  padding: ${spacings.md};
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavigationListItem = styled.li`
  margin: ${spacings.sm};
`;

const NavigationButton = styled.button`
  background-color: ${colors.lightGreen};
  border: none;
  border-radius: 5%;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.75);
  color: ${colors.white};
  font-size: ${fontSize.md};
  height: 4.5rem;
  width: 4.5rem;

  &:hover {
    background-color: ${colors.teal};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 3rem;
    width: 3rem;
  }

  ${({ active }) =>
    active &&
    `
    background-color: ${colors.teal}
  `}
`;

export default Pagination;
