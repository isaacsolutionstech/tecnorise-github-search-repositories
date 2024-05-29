import { onError } from "@apollo/client/link/error";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { GITHUB_API_KEY, GITHUB_API_URL } from "./constants.config";

const httpLink = new HttpLink({
  uri: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.error("Erro GraphQL:", graphQLErrors);
  }

  if (networkError) {
    console.error("Erro de rede:", networkError.message);
  }
});

export const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink),
});
