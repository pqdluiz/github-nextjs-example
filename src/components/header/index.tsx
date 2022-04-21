import { useState } from "react";
import { NextComponentType } from "next";

import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

export const Header: NextComponentType = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState<string>("");

  const submitGetUser = (): void => {
    if (!usernameForSearch) return undefined;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper data-testid="div-test">
        <input
          data-testid="input-test"
          type="text"
          placeholder="Digite o username para pesquisa..."
          value={usernameForSearch}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsernameForSearch(
              (prevState) => (prevState = event.target.value)
            )
          }
        />
        <button data-testid="button-test" type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};
