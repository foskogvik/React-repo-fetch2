import React from "react";
import styled from "styled-components";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Table = (props) => {
  if (props.error) {
    return <ErrorMessage>{props.error}</ErrorMessage>;
  } else if (props.loading) {
    return (
      <LoaderContainer>
        <Loader
          type='ThreeDots'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000}
        />
      </LoaderContainer>
    );
  }

  return (
    <StyledTable>
      <StyledTableHead>
        <TableRow>
          <FirstTableHead>Owner</FirstTableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Stars</TableHead>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {props.repos.map((repo) => (
          <TableRow key={repo.id}>
            <OwnerCol>
              <RepoImage src={repo.avatar} alt='owner avatar'></RepoImage>
              <p>{repo.owner}</p>
            </OwnerCol>
            <TitleCol className='title-col'>{repo.name}</TitleCol>
            <TitleCol>{repo.description}</TitleCol>
            <TitleCol>{repo.stargazers}</TitleCol>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default Table;

const StyledTable = styled.table`
  border-collapse: collapse;
  color: white;
  width: 100%;
`;

const StyledTableHead = styled.thead`
  font-size: 1.2rem;
  background-color: #3a5683;
  text-align: left;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #286f58;
`;

const TableHead = styled.th`
  padding: 20px 12px;
`;

const FirstTableHead = styled.th`
  text-align: center;
`;

const TableBody = styled.tbody`
  background-color: #639a88;
  width: 100vw;
`;

const OwnerCol = styled.td`
  padding: 22px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const RepoImage = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 3px;
`;

const TitleCol = styled.td`
  font-size: 1.2rem;
`;

const ErrorMessage = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`;

const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
`;
