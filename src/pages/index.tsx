import { NextPage } from "next";
import {
  Layout,
  NoSearch,
  Profile,
  Repositories,
} from "../components";
import useGithub from "../hooks/github-hooks";

const Home: NextPage = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState?.hasUser ? (
        <>
          {githubState?.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default Home;
