import { NextPage } from "next";
import Home from ".";
import { ResetCSS } from "../global/resetCSS";
import GithubProvider from "../providers/github-provider";

const Providers: NextPage = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Home />
      </GithubProvider>
    </main>
  );
};

export default Providers;
