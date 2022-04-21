import { NextComponentType } from "next";
import { Header } from "../header";
import * as S from "./styled";

export const Layout: NextComponentType = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};
