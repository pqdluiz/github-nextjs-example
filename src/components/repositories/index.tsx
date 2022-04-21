import { NextComponentType } from "next";
import { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import { RepositoryItem } from "../repository-item";
import * as S from "./styled";

type Props = {
  name: string;
  full_name: string;
};

export const Repositories: NextComponentType = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState<any[]>([]);

  useEffect(() => {
    (async function getdata(): Promise<void> {
      if (githubState.user.login) {
        getUserRepos(githubState.user.login);
        getUserStarred(githubState.user.login);
      }

      setHasUserForSearchrepos(
        (prevState) => (prevState = githubState.repositories)
      );
    })();
  }, [getUserRepos, getUserStarred, githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item: Props, index: number) => (
                <RepositoryItem
                  key={index}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item: Props, index: number) => (
                <RepositoryItem
                  key={index}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};
