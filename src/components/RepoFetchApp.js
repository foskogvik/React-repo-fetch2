import React, { useState, useEffect } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import Header from "../layout/Header";
import { GlobalStyle } from "../GlobalStyle";

const RepoFetchApp = () => {
  const [fetchedRepos, setFetchedRepos] = useState(() => []);
  const [isLoading, setIsLoading] = useState(() => true);
  const [currentPage, setCurrentPage] = useState(() => 1);
  const [reposPerPage, setReposPerPage] = useState(() => 20);
  const [error, setError] = useState(null);

  // fetching start
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100"
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data, check resource URL");
        }
        return response.json();
      })
      .then((response) => {
        const repoArray = response.items.map((repo) => ({
          id: repo.id,
          name: repo.name,
          owner: repo.owner.login,
          ownerUrl: repo.owner.html_url,
          avatar: repo.owner.avatar_url,
          description: repo.description,
          stargazers: repo.stargazers_count,
        }));
        setIsLoading(false);
        setFetchedRepos(repoArray);
      })
      .catch((err) => {
        setError(err.message);
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

  const changeDisplayAmount = (displayAmount) => {
    setReposPerPage(displayAmount);
  };

  return (
    <>
      <GlobalStyle />
      <Header changeDisplayAmount={changeDisplayAmount} />
      <Table error={error} repos={currentRepos} loading={isLoading} />
      {!isLoading && (
        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={fetchedRepos.length}
          paginate={paginate}
          currentPage={currentPage}
          loading={isLoading}
        />
      )}
    </>
  );
};

export default RepoFetchApp;
