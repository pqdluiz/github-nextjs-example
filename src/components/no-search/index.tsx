import { NextComponentType } from "next";
import * as S from "./styled";

export const NoSearch: NextComponentType = () => {
  return (
    <S.Wrapper>
      <h1>Nenhum usuario pesquisado</h1>
    </S.Wrapper>
  );
};
