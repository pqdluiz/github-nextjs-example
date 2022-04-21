import type { AppProps } from "next/app";
import { ResetCSS } from "../global/resetCSS";
import GithubProvider from "../providers/github-provider";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GithubProvider>
      <Component {...pageProps} />
      <ResetCSS />
    </GithubProvider>
  );
}

export default MyApp;
