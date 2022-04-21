export type Props = {
  id: number;
  avatar_url: string;
  login: any;
  name: string;
  html_url: string;
  blog: any;
  company: any;
  location: any;
  followers: number;
  following: number;
  public_gists: number;
  public_repos: number;
};

export type OwnProps = {
  githubState: {
    hasUser: boolean;
    loading: boolean;
    user: {
      id: number;
      avatar_url: string;
      login: string;
      name: string;
      html_url: string;
      blog: string;
      company: any[];
      location: string;
      followers: number;
      following: number;
      public_gists: number;
      public_repos: number;
    };
    repositories: any[];
    starred: any[];
  };
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  getUserStarred: (username: string) => void;
};
