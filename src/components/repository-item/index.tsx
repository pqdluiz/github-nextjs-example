import { NextPage } from "next";
import * as S from "./styled";

type Props = {
  name: string;
  linkToRepo: string;
  fullName: string;
};

export const RepositoryItem: NextPage<Props> = ({
  name,
  linkToRepo,
  fullName,
}) => {
  return (
    <S.Wrapper data-testid="div-test">
      <S.WrapperTitle data-testid="h2-test">{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink data-testid="a-test" href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};
