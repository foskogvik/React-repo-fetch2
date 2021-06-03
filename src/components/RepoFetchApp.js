import React, { useState, useEffect } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import Header from "../layout/Header";
import { GlobalStyle } from "../GlobalStyle";

const RepoFetchApp = () => {
  // defining state.
  const [fetchedRepos, setFetchedRepos] = useState(() => []);
  const [isLoading, setIsLoading] = useState(() => true);
  const [currentPage, setCurrentPage] = useState(() => 1);
  const [reposPerPage, setReposPerPage] = useState(() => 20);

  // fetching start
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100"
    )
      .then((response) => {
        if (!response.ok) {
          throw new console.error("Failed fetch");
        }
        return response.json();
      })
      .then((response) => {
        const repoArray = response.items.map((repo) => ({
          id: repo.id,
          name: repo.name,
          owner: repo.owner.login,
          avatar: repo.owner.avatar_url,
          description: repo.description,
          stargazers: repo.stargazers_count,
        }));
        setIsLoading(false);
        setFetchedRepos(repoArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // fetching end

  // Pagination start

  // calculate pagination values
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = fetchedRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeFetchAmount = () => {
    setReposPerPage(100);
    console.log(reposPerPage);
  };

  return (
    <>
      <GlobalStyle />
      <button onClick={changeFetchAmount}>changeFetchAmount</button>
      <Header />
      <Table repos={currentRepos} loading={isLoading} />
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={fetchedRepos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default RepoFetchApp;
