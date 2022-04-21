import { NextPage } from "next";
import { AxiosResponse } from "axios";
import { createContext, useCallback, useState } from "react";
import api from "../services/api";
import { OwnProps, Props } from "./repository";

export const GithubContext = createContext<OwnProps>({} as OwnProps);

const GithubProvider: NextPage = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: 0,
      avatar_url: "",
      login: "",
      name: "",
      html_url: "",
      blog: "",
      company: [],
      location: "",
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username: string): void => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${username}`)
      .then((data: AxiosResponse<Props>) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data?.data.id,
            avatar_url: data?.data.avatar_url,
            login: data?.data.login,
            name: data?.data.name,
            html_url: data?.data.html_url,
            blog: data?.data.blog,
            company: data?.data.company,
            location: data?.data.location,
            followers: data?.data.followers,
            following: data?.data.following,
            public_gists: data?.data.public_gists,
            public_repos: data?.data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username: string): void => {
    api
      .get(`users/${username}/repos`)
      .then(({ data }) => {
        console.log("data: " + JSON.stringify(data));

        setGithubState((prevState) => ({
          ...prevState,
          repositories: data,
        }));
      })
      .catch((error: Error) => error);
  };

  const getUserStarred = (username: string): void => {
    api
      .get(`users/${username}/starred`)
      .then(({ data }) => {
        console.log("data: " + JSON.stringify(data));
        setGithubState((prevState) => ({
          ...prevState,
          starred: data,
        }));
      })
      .catch((error: Error) => error);
  };

  const contextValue: OwnProps = {
    githubState,
    getUser: useCallback((username: string): void => getUser(username), []),
    getUserRepos: useCallback(
      (username: string): void => getUserRepos(username),
      []
    ),
    getUserStarred: useCallback(
      (username: string): void => getUserStarred(username),
      []
    ),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
