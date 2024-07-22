import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
  query searchRepositories($searchTerm: String!) {
    search(query: $searchTerm, type: REPOSITORY, first: 20) {
      repositoryCount
      nodes {
        ... on Repository {
          name
          description
          owner {
            login
            avatarUrl
          }
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;

export const REPOSITORY_DETAIL = gql`
  query repositoryDetail($repositoryName: String!, $repositoryOwner: String!) {
    repository(name: $repositoryName, owner: $repositoryOwner) {
      url
      updatedAt
      createdAt
      defaultBranchRef {
        target {
          ... on Commit {
            history(first: 100) {
              totalCount
              edges {
                node {
                  committedDate
                }
              }
            }
          }
        }
      }
      primaryLanguage {
        name
      }
      forks {
        totalCount
      }
      watchers {
        totalCount
      }
      issues(states: OPEN) {
        totalCount
      }
      pullRequests(states: OPEN) {
        totalCount
      }
      commitComments {
        totalCount
      }
    }
  }
`;
