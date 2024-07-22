export interface RepositoryGraphqlOwnerType {
  login: string;
  avatarUrl: string;
}

export interface RepositoryDefaultBranchRefHistoryEdges {
  node: {
    committedDate: string;
  };
}

export interface RepositoryDefaultBranchRefHistory {
  totalCount: number;
  edges: RepositoryDefaultBranchRefHistoryEdges[];
}

export interface RepositoryDefaultBranchRef {
  target: {
    history: RepositoryDefaultBranchRefHistory;
  };
}

export interface RepositoryIssues {
  totalCount: number;
}

export interface RepositoryPullRequest {
  totalCount: number;
}

export interface RepositoryCommitComments {
  totalCount: number;
}

export interface RepositoryForks {
  totalCount: number;
}

export interface RepositoryWatch {
  totalCount: number;
}

export interface RepositoryPrimaryLanguage {
  name: string;
}

export interface RepositoryGraphqlType {
  url: string;
  name: string;
  description: string;
  owner: RepositoryOwnerType;
  primaryLanguage: RepositoryPrimaryLanguage;
}

export interface RepositoryDetailGraphqlType {
  url: string;
  name: string;
  updatedAt: string;
  createdAt: string;
  forks: RepositoryForks;
  issues: RepositoryIssues;
  watchers: RepositoryWatch;
  owner: RepositoryOwnerType;
  pullRequests: RepositoryPullRequest;
  commitComments: RepositoryCommitComments;
  primaryLanguage: RepositoryPrimaryLanguage;
  defaultBranchRef: RepositoryDefaultBranchRef;
}
