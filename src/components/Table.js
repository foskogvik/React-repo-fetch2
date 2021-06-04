import React from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { colors, fontSize, spacings } from "../variables";

const Table = (props) => {
  if (props.error) {
    return <ErrorMessage>{props.error}</ErrorMessage>;
  } else if (props.loading) {
    return (
      <LoaderContainer>
        <Loader
          type='ThreeDots'
          color={colors.green}
          height={100}
          width={100}
          timeout={3000}
        />
      </LoaderContainer>
    );
  }

  return (
    <StyledTable>
      <TableHeading>
        <TableRow>
          <TableHeadingCell>Owner</TableHeadingCell>
          <TableHeadingCell>Name</TableHeadingCell>
          <TableHeadingCell>Description</TableHeadingCell>
          <TableHeadingCell>Stars</TableHeadingCell>
        </TableRow>
      </TableHeading>
      <TableBody>
        {props.repos.map((repo) => (
          <TableRow key={repo.id}>
            <RepoOwnerCell>
              <RepoOwnerImage
                src={repo.avatar}
                alt='owner avatar'
              ></RepoOwnerImage>
              <RepoOwnerName target='_blank' href={repo.ownerUrl}>
                {repo.owner}
              </RepoOwnerName>
            </RepoOwnerCell>
            <RepoDataCell>{repo.name}</RepoDataCell>
            <RepoDataCellDesc>{repo.description}</RepoDataCellDesc>
            <RepoDataCell>{repo.stargazers}</RepoDataCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default Table;

const StyledTable = styled.table`
  border-collapse: collapse;
  color: ${colors.white};
  width: 100%;
`;

const TableHeading = styled.thead`
  background-color: ${colors.teal};
  font-size: ${fontSize.md};
  text-align: left;

  @media (max-width: 768px) {
    font-size: ${fontSize.xs};
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${colors.darkTeal};
`;

const TableHeadingCell = styled.th`
  padding: ${spacings.md};
`;

const TableBody = styled.tbody`
  background-color: ${colors.green};
`;

const RepoOwnerCell = styled.td`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: ${spacings.sm} 0;
  text-align: center;
`;

const RepoOwnerImage = styled.img`
  height: 5rem;
  width: 5rem;

  @media (max-width: 768px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const RepoOwnerName = styled.a`
  color: ${colors.white};
  font-size: ${fontSize.sm};
  margin: ${spacings.sm};
  text-decoration: underline;

  &:hover {
    color: ${colors.teal};
  }

  @media (max-width: 768px) {
    font-size: ${fontSize.xs};
  }
`;

const RepoDataCell = styled.td`
  font-size: ${fontSize.sm};
  padding: 0 ${spacings.md};

  @media (max-width: 768px) {
    font-size: ${fontSize.xs};
    padding: 0;
  }
`;

const RepoDataCellDesc = styled.td`
  font-size: ${fontSize.sm};
  padding: 0 ${spacings.md};

  @media (max-width: 768px) {
    font-size: ${fontSize.xs};
    padding: 0;
  }
`;

const ErrorMessage = styled.h2`
  font-size: ${fontSize.xl};
  font-weight: bold;
  text-align: center;
`;

const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
`;
